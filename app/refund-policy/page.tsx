import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";
export const metadata: Metadata = { title: "Refund Policy | ELÖRE Atelier", description: "ELÖRE Atelier return, exchange, modification, and refund policy." };
export default function RefundPolicyPage() {
  return <PolicyPage title="Refund Policy"><section className="space-y-5">
    <p>Elöre accepts returns and exchanges for online purchases within 14 days of delivery. Merchandise must be returned in its original condition, with its original packaging, and accompanied by proof of purchase.</p>
    <p>Refunds will be issued to the original form of payment once the returned merchandise has been received and inspected. Elöre covers the cost of domestic return shipping.</p>
    <p>Each hat is individually handcrafted, modifications can be requested within 72 hours of the order being transmitted to the atelier. Depending on what is needed, Elöre may be able to make adjustments to sizing, design, trim, tailoring, or other fit-related details. Please contact us within this 72-hour window to discuss your request.</p>
    <p>All custom orders and hats with modifications are final sale and are not eligible for returns or exchanges.</p>
    <p>For return, exchange, or adjustment inquiries, please contact <a href="mailto:Salome@elore.atelier">Salome@elore.atelier</a>.</p>
    <p><em>International customers are responsible for any applicable shipping fees.</em></p>
  </section></PolicyPage>;
}
