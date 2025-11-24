# Marketplace Handler Worker

This Cloudflare Worker is responsible for processing emails from the TAMU SOFC Flywire system regarding payments.

- **Repository:** [https://github.com/IEEE-TAMU/marketplace-handler](https://github.com/IEEE-TAMU/marketplace-handler)

It parses payment confirmation emails and triggers webhooks to update payment status in our systems (e.g., the Member Portal).
