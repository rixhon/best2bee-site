"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import type { LeadFormValues } from "@/types";

const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome."),
  email: z.string().trim().email("Informe um email valido."),
  company: z.string().trim().min(2, "Informe sua empresa."),
  phone: z.string().trim().optional(),
});

const defaultValues: LeadFormValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
};

type LeadFormProps = {
  onSubmit?: (values: LeadFormValues) => Promise<void> | void;
};

export function LeadForm({ onSubmit }: LeadFormProps) {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<LeadFormValues>({
    defaultValues,
    resolver: zodResolver(leadFormSchema),
  });

  async function submitLead(values: LeadFormValues) {
    await onSubmit?.(values);
    reset(defaultValues);
  }

  return (
    <form className="grid gap-4" noValidate onSubmit={handleSubmit(submitLead)}>
      <div className="grid gap-2">
        <label className="text-sm font-medium text-foreground" htmlFor="lead-name">
          Nome
        </label>
        <input
          autoComplete="name"
          className="min-h-11 rounded-md border border-border bg-background px-3 py-2 text-sm"
          id="lead-name"
          type="text"
          {...register("name")}
        />
        {errors.name ? <p className="text-sm text-red-600">{errors.name.message}</p> : null}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium text-foreground" htmlFor="lead-email">
          Email
        </label>
        <input
          autoComplete="email"
          className="min-h-11 rounded-md border border-border bg-background px-3 py-2 text-sm"
          id="lead-email"
          inputMode="email"
          type="email"
          {...register("email")}
        />
        {errors.email ? <p className="text-sm text-red-600">{errors.email.message}</p> : null}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium text-foreground" htmlFor="lead-company">
          Empresa
        </label>
        <input
          autoComplete="organization"
          className="min-h-11 rounded-md border border-border bg-background px-3 py-2 text-sm"
          id="lead-company"
          type="text"
          {...register("company")}
        />
        {errors.company ? (
          <p className="text-sm text-red-600">{errors.company.message}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium text-foreground" htmlFor="lead-phone">
          Telefone
        </label>
        <input
          autoComplete="tel"
          className="min-h-11 rounded-md border border-border bg-background px-3 py-2 text-sm"
          id="lead-phone"
          inputMode="tel"
          type="tel"
          {...register("phone")}
        />
      </div>

      <Button disabled={isSubmitting} type="submit">
        Enviar lead
      </Button>
    </form>
  );
}
