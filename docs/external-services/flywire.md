# Flywire (TAMU Marketplace)

[Flywire](https://www.flywire.com/) powers the TAMU Student Organization Finance Center (SOFC) marketplace, which IEEE TAMU uses to collect membership dues.

- **Store URL:** [sofctamu.estore.flywire.com](https://sofctamu.estore.flywire.com/products?storeCatalog=23243)

## Usage

### Membership Dues Collection

Students purchase IEEE TAMU membership through the Flywire marketplace. This is the official payment method required by TAMU for student organization finances.

### Payment Flow

1. Student navigates to the IEEE TAMU product on the Flywire store
2. Student completes payment through Flywire
3. Flywire sends a confirmation email to `marketplace-handler@ieeetamu.org`
4. The [Marketplace Handler](../internal-services/workers/marketplace-handler.md) processes the email
5. The [Member Portal](../internal-services/apps/member-portal.md) is updated with payment status
6. The [Discord Bot](../internal-services/apps/discord-bot.md) assigns the "Member" role

See [Member Dues Payment Flow](../flows/member-dues-payment.md) for the complete end-to-end documentation.

## Limitations

Flywire's SOFC integration has limited automation capabilities:
- No direct API access for student organizations
- Only notification method is email confirmation
- This is why we use the [Marketplace Handler](../internal-services/workers/marketplace-handler.md) to bridge the gap

## Administration

Product setup and pricing is managed through the SOFC portal by officers with financial access.
