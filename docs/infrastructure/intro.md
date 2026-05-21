---
sidebar_position: 0
---

# Infrastructure Overview

This section documents the foundational technical infrastructure of IEEE TAMU—the hardware, platforms, and core services that power our applications.

## Components

- **[Cloudflare DNS](./cloudflare/dns.md)**: DNS configuration managed via Terraform/OpenTofu in the [infra repo](https://github.com/IEEE-TAMU/infra).
- **[Hardware](./hardware/nixos-cluster.md)**: Physical NixOS cluster hosted on campus.
- **[Kubernetes](./kubernetes/cluster-setup.md)**: Cluster configuration and infrastructure services (Traefik, MariaDB, etc.).

## Related Sections

- **[Internal Services](../internal-services/intro.md)**: User-facing applications and Cloudflare Workers built by IEEE TAMU.
- **[External Services](../external-services/intro.md)**: Third-party services we integrate with (Brevo, Flywire, Discord, etc.).
- **[Example Flows](../flows/intro.md)**: End-to-end documentation of how services interact.
