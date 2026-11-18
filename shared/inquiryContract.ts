import { z } from "zod";

export const inquiryStatusSchema = z.enum([
  "New",
  "Under Review",
  "Awaiting Information",
  "Proposal Preparation",
  "Proposal Sent",
  "Accepted",
  "Declined",
  "Completed",
]);

export const inquiryKindSchema = z.enum(["project", "enterprise", "consultation"]);

export const projectInquirySchema = z.object({
  kind: z.literal("project"),
  serviceSlug: z.string().max(160).optional(),
  fullName: z.string().trim().min(2).max(160),
  professionalEmail: z.string().trim().email().max(320),
  phone: z.string().trim().max(60).optional(),
  country: z.string().trim().min(2).max(120),
  organizationName: z.string().trim().max(200).optional(),
  organizationType: z.string().trim().min(2).max(120),
  selectedServices: z.array(z.string().trim().min(1).max(160)).min(1).max(12),
  projectTitle: z.string().trim().max(200).optional(),
  requirements: z.string().trim().min(20).max(5000),
  problem: z.string().trim().min(20).max(5000),
  projectType: z.enum(["New project", "Existing system"]),
  deliverables: z.string().trim().min(10).max(3000),
  budgetRange: z.string().trim().max(80).optional(),
  timeline: z.string().trim().min(2).max(80),
  privacyConsent: z.literal(true),
});

export const enterpriseInquirySchema = z.object({
  kind: z.literal("enterprise"),
  institutionName: z.string().trim().min(2).max(240),
  institutionWebsite: z.string().trim().url().max(320).optional().or(z.literal("")),
  contactDesignation: z.string().trim().min(2).max(160),
  professionalEmail: z.string().trim().email().max(320),
  sector: z.string().trim().min(2).max(160),
  projectOverview: z.string().trim().min(20).max(5000),
  estimatedProjectScale: z.string().trim().min(2).max(120),
  procurementContext: z.string().trim().max(3000).optional(),
  privacyConsent: z.literal(true),
});

export const consultationInquirySchema = z.object({
  kind: z.literal("consultation"),
  fullName: z.string().trim().min(2).max(160),
  professionalEmail: z.string().trim().email().max(320),
  organizationName: z.string().trim().max(200).optional(),
  message: z.string().trim().min(20).max(5000),
  privacyConsent: z.literal(true),
});

export const inquirySubmissionSchema = z.discriminatedUnion("kind", [projectInquirySchema, enterpriseInquirySchema, consultationInquirySchema]);

export type InquiryStatus = z.infer<typeof inquiryStatusSchema>;
export type InquirySubmission = z.infer<typeof inquirySubmissionSchema>;

export type InquiryRecord = {
  inquiryId: string;
  submittedAt: string;
  status: InquiryStatus;
  contact: {
    fullName?: string;
    professionalEmail: string;
    phone?: string;
  };
  organization?: {
    name?: string;
    type?: string;
    country?: string;
    website?: string;
    sector?: string;
    designation?: string;
  };
  selectedServices?: string[];
  project?: {
    title?: string;
    requirements?: string;
    problem?: string;
    deliverables?: string;
    projectType?: string;
    budgetRange?: string;
    timeline?: string;
    overview?: string;
    estimatedScale?: string;
    procurementContext?: string;
  };
  internalNotes: string;
  assignedTeamMember?: string;
};

export const inquirySystemConfig = {
  officialContactEmail: "advisory@atlasai.institute",
  emailNotifications: "provider-required",
  persistence: "database-required",
} as const;
