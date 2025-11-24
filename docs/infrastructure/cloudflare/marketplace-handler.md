# Marketplace Handler Worker

This Cloudflare Worker is responsible for processing emails from the TAMU SOFC Flywire system regarding payments.

- **Repository:** [https://github.com/IEEE-TAMU/marketplace-handler](https://github.com/IEEE-TAMU/marketplace-handler)

It parses payment confirmation emails and triggers webhooks to update payment status in our systems (e.g., the Member Portal).

## Overview

The [TAMU Flywire marketplace](https://sofctamu.estore.flywire.com/) provides limited automation capabilities for student organizations. The only available notification method is an email sent when an item is purchased. This worker bridges that gap to automate membership tracking.

## Workflow

1.  **Purchase**: A membership is purchased on the [IEEE TAMU Flywire store](https://sofctamu.estore.flywire.com/products?storeCatalog=23243).
2.  **Notification**: Flywire sends a confirmation email to the monitored inbox: `marketplace-handler@ieeetamu.org`.
3.  **Processing**: The Cloudflare Worker receives the email.
    *   It verifies the sender.
    *   It parses the email content to extract transaction details.
    *   If verification or parsing fails, the email is forwarded for manual review.
4.  **Update**: The worker makes an authenticated request (using a shared secret) to the [Member Portal](../apps/member-portal.md) to automatically update the member's payment and membership status.

## Configuration

### Email Address
The worker is configured to handle emails sent to `marketplace-handler@ieeetamu.org`.

### Secrets
The worker uses a shared secret to authenticate with the Member Portal API. This ensures that only valid payment notifications from this worker can update member status.

## Development

An example anonymized email body is available in the `test/` directory of the repository to assist with testing the parsing logic.
