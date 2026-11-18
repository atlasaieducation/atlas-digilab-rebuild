import type { Express } from "express";
import { notifyOwner } from "./_core/notification";
import { inquirySubmissionSchema, type InquirySubmission } from "../shared/inquiryContract";

const CONTACT_EMAIL = "advisory@atlasai.institute";

function inquiryTitle(inquiry: InquirySubmission) {
  const subject = inquiry.kind === "enterprise"
    ? inquiry.institutionName
    : inquiry.kind === "project"
      ? inquiry.projectTitle || inquiry.fullName
      : inquiry.fullName;
  return `Atlas DigiLab website inquiry · ${subject.replace(/[\r\n]+/g, " ").slice(0, 160)}`;
}

function inquiryContent(inquiry: InquirySubmission) {
  const rows: Array<[string, string | undefined]> = [["Inquiry type", inquiry.kind]];
  if (inquiry.kind === "project") {
    rows.push(
      ["Name", inquiry.fullName],
      ["Work email", inquiry.professionalEmail],
      ["Phone", inquiry.phone],
      ["Country", inquiry.country],
      ["Organization", inquiry.organizationName],
      ["Organization type", inquiry.organizationType],
      ["Services", inquiry.selectedServices.join(", ")],
      ["Project title", inquiry.projectTitle],
      ["Project type", inquiry.projectType],
      ["Requirements", inquiry.requirements],
      ["Problem to solve", inquiry.problem],
      ["Deliverables", inquiry.deliverables],
      ["Budget range", inquiry.budgetRange],
      ["Timeline", inquiry.timeline],
    );
  } else if (inquiry.kind === "enterprise") {
    rows.push(
      ["Institution", inquiry.institutionName],
      ["Website", inquiry.institutionWebsite || undefined],
      ["Contact designation", inquiry.contactDesignation],
      ["Work email", inquiry.professionalEmail],
      ["Sector", inquiry.sector],
      ["Project overview", inquiry.projectOverview],
      ["Estimated scale", inquiry.estimatedProjectScale],
      ["Procurement context", inquiry.procurementContext],
    );
  } else {
    rows.push(
      ["Name", inquiry.fullName],
      ["Work email", inquiry.professionalEmail],
      ["Organization", inquiry.organizationName],
      ["Message", inquiry.message],
    );
  }

  return [
    "A prospective client submitted a website inquiry to Atlas DigiLab.",
    "",
    ...rows.filter(([, value]) => value !== undefined && value.length > 0).map(([label, value]) => `${label}: ${value}`),
    "",
    "Delivery note: this alert is for the Atlas DigiLab project owner. The site does not store submissions in a managed database and does not send an automatic customer email.",
  ].join("\n");
}

/** Validates prospect submissions, then sends an owner alert; no inquiry database is configured. */
export function registerInquiryRoutes(app: Express) {
  app.post("/api/inquiries", async (req, res) => {
    const parsed = inquirySubmissionSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        ok: false,
        code: "INVALID_INQUIRY",
        message: "Please review the required fields and try again.",
        fields: parsed.error.flatten().fieldErrors,
      });
    }

    try {
      const accepted = await notifyOwner({
        title: inquiryTitle(parsed.data),
        content: inquiryContent(parsed.data),
      });
      if (!accepted) {
        return res.status(502).json({
          ok: false,
          code: "INQUIRY_DELIVERY_FAILED",
          message: `Your inquiry was not sent. Please email ${CONTACT_EMAIL} instead.`,
        });
      }
      return res.json({ ok: true, message: "Your inquiry was sent to the Atlas DigiLab team." });
    } catch (error) {
      console.error("[Inquiry] Owner notification is unavailable:", error instanceof Error ? error.message : "unknown error");
      return res.status(503).json({
        ok: false,
        code: "INQUIRY_DELIVERY_UNAVAILABLE",
        message: `Your inquiry was not sent. Please email ${CONTACT_EMAIL} instead.`,
      });
    }
  });
}
