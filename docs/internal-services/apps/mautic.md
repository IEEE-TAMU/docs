# Mautic

Mautic is our self-hosted bulk email and marketing automation platform, available at `mautic.ieeetamu.org`.

<ServiceLinks deploymentPaths={['apps/mautic']} />

## Overview

[Mautic](https://www.mautic.org/) is an open-source marketing automation platform used for:

- Bulk email campaigns to members and alumni
- Newsletter distribution
- Email list segmentation and management
- Campaign tracking and analytics

## Configuration

Mautic runs on the Kubernetes cluster and uses [MariaDB](../../infrastructure/kubernetes/infra-services/mariadb.md) for data storage.

### Email Delivery

Outbound emails from Mautic are routed through [Kumo MTA](../../infrastructure/kubernetes/infra-services/kumo-mta.md) for delivery.

### DNS Configuration

SPF and DKIM records for Mautic are managed in the [infra repo](https://github.com/IEEE-TAMU/infra). See [DNS Configuration](../../infrastructure/cloudflare/dns.md) for details.

## Access

Mautic is accessible to officers with appropriate permissions. Credentials are stored in [Vaultwarden](./vaultwarden.md).
