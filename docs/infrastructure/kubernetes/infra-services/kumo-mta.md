# Kumo MTA

Kumo MTA is used to handle outbound emails from applications running on the cluster.

- **Repository:** [https://github.com/IEEE-TAMU/cluster-infra/tree/master/infra/email](https://github.com/IEEE-TAMU/cluster-infra/tree/master/infra/email)

## Overview

This service provides an internal Mail Transfer Agent (MTA) using [KumoMTA](https://github.com/KumoCorp/kumomta). It allows applications within the cluster to send emails to the outside world.

The service is **internal only** and is not exposed to the internet or the campus network.

## Routing Logic

The MTA is configured with specific routing rules to ensure reliable delivery:

1.  **Direct Delivery (`@tamu.edu`)**:
    *   Emails sent to `tamu.edu` addresses are delivered directly to the on-campus mail relays.
    *   These emails are signed with DKIM using the `cluster` selector.

2.  **Relayed Delivery (Everything else)**:
    *   All other emails are routed through [Brevo](../../../external-services/brevo.md).
    *   This allows us to utilize Brevo's free tier (300 emails/day) for general delivery.

## Configuration

The configuration is managed via a ConfigMap (`kumo-policy`) which defines the Lua policy scripts for KumoMTA.

### Key Components
*   **Listener**: Listens on port 25 for internal SMTP traffic.
*   **DKIM Signing**: Signs outgoing emails for `ieeetamu.org` using the `cluster` selector.
*   **Traffic Shaping**: Configures connection settings and injects credentials for the Brevo relay.

## DNS Configuration

To ensure email deliverability, we use DKIM signing. The public key is published in the DNS record `cluster._domainkey.ieeetamu.org`.

See [DNS Configuration](../../cloudflare/dns.md#cluster-email-kumo-mta) for more details.
