import AuthLayout from "@/components/auth/AuthLayout";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout title="Forgot password" subtitle="No worries, we'll help you reset it">
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
