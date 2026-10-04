import { Reveal } from "@/components/reveal";

export const metadata = {
    title: "Master Operational Governance & Policy | Lotus Moving Services",
    description:
        "Official Master Operational Governance, Regulatory Compliance, and Standard Operating Procedures Manual for Lotus Moving Services.",
};

export default function PolicyPage() {
    return (
        <div className="bg-background py-16 lg:py-24">
            <div className="container-lotus max-w-4xl">
                <Reveal>
                    <div className="border-b border-border pb-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                            Official Corporate Policy
                        </p>
                        <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
                            LOTUS MOVING SERVICES
                        </h1>
                        <p className="mt-2 text-lg text-muted-foreground">
                            Master Operational Governance, Regulatory Compliance, and Standard Operating Procedures Manual
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground/80">HQ: Lagos State, Nigeria</p>
                    </div>
                </Reveal>

                <div className="mt-12 space-y-12 text-sm leading-relaxed text-foreground/90">
                    <Section title="1. CAC & Corporate Governance Compliance">
                        <p>
                            <strong>Corporate Legal Standing:</strong> Lotus Moving Services is duly registered under the Companies and Allied Matters Act (CAMA 2020) as a limited liability entity authorized to carry on commercial transport, haulage, relocation, and logistics support services nationwide.
                        </p>
                        <p className="mt-3">
                            <strong>Statutory Filings:</strong> The company maintains active annual returns with the Corporate Affairs Commission (CAC) and updates its particulars (Directors, Share Capital, Registered Address) within statutory timelines.
                        </p>
                        <p className="mt-3">
                            <strong>Tax & Statutory Obligations:</strong> Valid Tax Identification Number (TIN) is maintained with the Federal Inland Revenue Service (FIRS) and Lagos State Internal Revenue Service (LIRS), including prompt remittance of Company Income Tax (CIT), Value Added Tax (VAT), and Pay-As-You-Earn (PAYE) deductions.
                        </p>
                        <p className="mt-3">
                            <strong>Pension & Social Insurance:</strong> Full compliance with the Pension Reform Act (PenCom) and Nigeria Social Insurance Trust Fund (NSITF) guidelines for all full-time administrative and operational personnel.
                        </p>
                    </Section>

                    <Section title="2. NIPOST / CLRD Compliance">
                        <p>
                            <strong>Regulatory Authorization:</strong> In strict compliance with the Nigerian Postal Service (NIPOST) Act and Courier & Logistics Regulatory Department (CLRD) Regulations, Lotus Moving Services holds the requisite State/Regional/National Logistics Operating License.
                        </p>
                        <p className="mt-3">
                            <strong>Operating Standards:</strong> Adherence to CLRD quality-of-service standards, handling protocols, tariff filing requirements, and annual license renewal obligations.
                        </p>
                        <p className="mt-3">
                            <strong>Inspection & Enforcement:</strong> Operating yards and vehicles are fully accessible for scheduled or unscheduled inspections by NIPOST-CLRD inspectors and relevant federal trade authorities.
                        </p>
                        <p className="mt-3">
                            <strong>Prohibited Consignments:</strong> Strict enforcement against conveying illicit items, contraband, unauthorized pharmaceuticals, or uninspected hazardous materials under postal and customs laws.
                        </p>
                    </Section>

                    <Section title="3. Lagos State Transport & Vehicle Regulatory Requirements">
                        <p>
                            All commercial moving trucks, vans, and utility vehicles deployed by Lotus Moving Services within Lagos State must strictly comply with the Lagos State Transport Sector Reform Law and guidelines enforced by the Vehicle Inspection Service (VIS) and Motor Vehicle Administration Agency (MVAA):
                        </p>
                        <ul className="mt-3 list-disc space-y-2 pl-5">
                            <li>
                                <strong>Compulsory Particulars:</strong> Every operational vehicle must possess a valid Vehicle Licence, Proof of Ownership Certificate, Roadworthiness Certificate (renewed bi-annually/annually as required), and an active commercial Hackney Permit / Stage Carriage Permit.
                            </li>
                            <li>
                                <strong>MOT & Emissions Test:</strong> Annual Ministry of Transport (MOT) roadworthiness and carbon emission testing compliance certificates displayed prominently.
                            </li>
                            <li>
                                <strong>Axle & Weight Controls:</strong> Compliance with Federal and State axle-load limits and haulage restrictions, avoiding unauthorized night-time movement of heavy articulated trucks on restricted urban routes.
                            </li>
                        </ul>
                    </Section>

                    <Section title="4. Driver & Crew Employment Policy">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="rounded-2xl border border-border bg-card p-6">
                                <h4 className="font-display text-base font-semibold">Driver Licensing & Vetting</h4>
                                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                                    <li>Valid Class 'C' or 'E' (Heavy/Commercial) Nigerian Drivers Licence.</li>
                                    <li>Mandatory guarantor verification and Nigeria Police character background check.</li>
                                    <li>Zero-tolerance drug and alcohol policy before and during active assignments.</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-border bg-card p-6">
                                <h4 className="font-display text-base font-semibold">Uniform & Conduct</h4>
                                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                                    <li>Mandatory branded high-visibility vests, safety boots, and company-issued uniforms.</li>
                                    <li>Professional courtesy, strict anti-tipping extortion rule, and non-smoking mandate on client sites.</li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <Section title="5. Insurance & Risk Management Policy">
                        <p>
                            <strong>Comprehensive Financial Safeguards:</strong> Lotus Moving Services maintains mandatory third-party motor insurance, comprehensive fleet insurance, and active Goods-in-Transit (GIT) indemnity insurance covering all client consignments against fire, collision, overturning, and accidental structural damage during transit.
                        </p>
                    </Section>

                    <Section title="6. Customer Terms & Conditions">
                        <p>
                            All relocation engagements are governed by our standard contract: clients warrant rightful ownership or authority over moved items; liability is limited to agreed transit valuation; and remote access/parking clearances at origin and destination are the client's responsibility.
                        </p>
                    </Section>

                    <Section title="7. Pricing, Payment, & Cancellation/Refund Policy">
                        <p>
                            <strong>Pricing Structure:</strong> Quotations are calculated based on volume (CBM), distance, labor hours, special handling requirements, and applicable packing materials. Extra charges apply for staircases above the 2nd floor without functional elevators.
                        </p>
                        <p className="mt-3">
                            <strong>Payment Terms:</strong> 50% mobilization deposit upon booking confirmation, and the remaining 50% balance immediately upon completion of offloading prior to departure from the destination site. Accepted modes: Direct bank transfer to corporate account or verified gateway. Cash payments require official digital receipts.
                        </p>
                        <p className="mt-3">
                            <strong>Cancellation & Refund:</strong> Cancellations made ≥ 48 hours before scheduled move date attract a full refund less 10% administrative fee. Cancellations within 24 hours forfeit the mobilization deposit. Rescheduling is permitted once without penalty if requested 24 hours prior.
                        </p>
                    </Section>

                    <Section title="8. Prohibited Items Policy">
                        <p>
                            <strong>Strict Prohibition:</strong> Lotus Moving Services strictly prohibits the loading or transport of illegal drugs/narcotics, firearms, ammunition, explosives, radioactive substances, flammable chemicals, live animals, unsealed perishable foodstuffs, and stolen or contraband goods. Drivers reserve the right to inspect open boxes if regulatory violation is suspected.
                        </p>
                    </Section>

                    <Section title="9. Inventory & Handover Policy">
                        <p>
                            A joint physical inspection and itemized inventory count must be conducted between the crew lead and the client prior to loading. Any pre-existing damage, scratches, or operational faults must be noted on the Inventory Form and countersigned by both parties.
                        </p>
                    </Section>

                    <Section title="10. Damage/Loss Claims & Customer Complaints Policy">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="rounded-2xl border border-border bg-card p-6">
                                <h4 className="font-display text-base font-semibold">Damage / Loss Claims</h4>
                                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                                    <li>Claims for damage or loss must be lodged in writing within 48 hours of move completion.</li>
                                    <li>Must be accompanied by photographic evidence and original purchase receipt/valuation proof.</li>
                                    <li>Investigation and resolution concluded within 14 working days.</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-border bg-card p-6">
                                <h4 className="font-display text-base font-semibold">Customer Complaints</h4>
                                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                                    <li>All service complaints directed to customer service via support@lotusmoving.ng or hotline.</li>
                                    <li>Initial acknowledgement within 24 hours; complete resolution within 7 business days.</li>
                                    <li>Unresolved matters escalatable to NIPOST-CLRD or FCCPC.</li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <Section title="11. Privacy, Data Protection & WhatsApp Communication Policy">
                        <p>
                            <strong>Data Protection (NDPR):</strong> In compliance with the Nigeria Data Protection Act (NDPA), client personal data, addresses, and inventory lists are handled with strict confidentiality and used solely for fulfilling relocation services.
                        </p>
                        <p className="mt-3">
                            <strong>WhatsApp Communication:</strong> Official chat channels are monitored for business inquiries, booking confirmations, and media sharing of inventory. Staff are prohibited from sharing client chat logs or media publicly.
                        </p>
                    </Section>

                    <Section title="12. Employee Code of Conduct & Anti-Fraud Policy">
                        <p>
                            Zero tolerance for bribery, theft, extortion, cargo tampering, or solicitation of unauthorized cash tips. Breaches result in immediate summary dismissal and handover to law enforcement agencies.
                        </p>
                    </Section>

                    <Section title="13. Health & Safety & Vehicle Inspection Policy">
                        <p>
                            <strong>H&S Protocols:</strong> Mandatory use of back support belts, lifting straps, gloves, and safety shoes. Proper ergonomic lifting techniques for heavy furniture and appliances.
                        </p>
                        <p className="mt-3">
                            <strong>Daily Vehicle Inspection:</strong> Drivers must execute a 15-point pre-trip inspection (tyres, brakes, lights, oil, water, documents) every morning before deployment.
                        </p>
                    </Section>

                    <Section title="14. Moving, Loading, Unloading SOP & Subcontractors">
                        <p>
                            <strong>SOP:</strong> Protection of floors and doorframes with padded blankets → Disassembly of required furniture → Systematic packing and tight lashing inside truck → Secure transit → Unloading and placement per client room layout.
                        </p>
                        <p className="mt-3">
                            <strong>Subcontractor Policy:</strong> All third-party partner drivers and auxiliary crew members must undergo vetting, sign compliance covenants, and adhere to Lotus service level standards.
                        </p>
                    </Section>

                    <Section title="15. Incident & Emergency Procedure">
                        <p>
                            In case of vehicle breakdown, accident, or road emergency, the driver must immediately secure the perimeter, deploy warning triangles, notify operations management, contact FRSC/Police if required, and protect cargo integrity.
                        </p>
                    </Section>

                    <Section title="16. Official Regulatory References">
                        <ul className="list-disc space-y-2 pl-5">
                            <li>Companies and Allied Matters Act (CAMA 2020)</li>
                            <li>Nigerian Postal Service Act & CLRD Regulations 2020</li>
                            <li>Lagos State Transport Sector Reform Law</li>
                            <li>Nigeria Data Protection Act (NDPA / NDPR)</li>
                        </ul>
                    </Section>
                </div>
            </div>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
                <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
                <div className="mt-4 leading-relaxed text-muted-foreground">{children}</div>
            </div>
        </Reveal>
    );
}
