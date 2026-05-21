# DNS Configuration

DNS for `ieeetamu.org` is managed via Terraform/OpenTofu in the [infra](https://github.com/IEEE-TAMU/infra) repository.

## Overview

All DNS records are defined as code in the infra repo. This includes:

- **Web Traffic**: CNAME records pointing to the [Cloudflare Tunnel](../kubernetes/infra-services/cloudflare-tunnel.md)
- **Email Routing**: MX records for inbound email via Cloudflare Email Routing
- **Transactional Email**: SPF/DKIM records for [Brevo](../../external-services/brevo.md)
- **Bulk Email**: SPF/DKIM records for [Mautic](../../internal-services/apps/mautic.md)
- **Cluster Email**: DKIM records for [Kumo MTA](../kubernetes/infra-services/kumo-mta.md)
- **Storage**: CNAME records for Cloudflare R2 buckets

## Making Changes

1. Edit the Terraform/OpenTofu configuration in the [infra repo](https://github.com/IEEE-TAMU/infra)
2. Submit a PR for review
3. Apply changes via the CI/CD pipeline

Do not make manual changes in the Cloudflare dashboard.
