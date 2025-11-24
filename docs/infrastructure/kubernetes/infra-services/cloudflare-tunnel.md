# Cloudflare Tunnel

We use Cloudflare Tunnel to allow internet access to our HTTP-based applications running on the cluster. This securely exposes our services without opening ports on the firewall.

- **Repository:** [https://github.com/IEEE-TAMU/cluster-infra/tree/master/infra/cloudflared](https://github.com/IEEE-TAMU/cluster-infra/tree/master/infra/cloudflared)

## Overview

The cluster runs behind the TAMU firewall, so we cannot expose ports directly to the internet. Cloudflare Tunnel (`cloudflared`) creates a persistent connection to the Cloudflare edge, allowing traffic to be routed to our cluster.

## Configuration

The tunnel is configured via a ConfigMap and Deployment in the Kubernetes cluster.

### Ingress Rules

The tunnel is configured to route all traffic for `ieeetamu.org` and its subdomains to the [Traefik](./traefik.md) ingress controller.

| Hostname | Service | Description |
|---|---|---|
| `ieeetamu.org` | `http://traefik.kube-system.svc.cluster.local:80` | Root domain |
| `*.ieeetamu.org` | `http://traefik.kube-system.svc.cluster.local:80` | Wildcard for all subdomains |
| *Catch-all* | `http_status:404` | Returns 404 for unmatched traffic |

### Deployment Details

- **Replicas**: 2 (for high availability)
- **Image**: `cloudflare/cloudflared`
- **Metrics**: Exposed on port `2000`

## DNS Setup

In the Cloudflare dashboard, `ieeetamu.org` and `*.ieeetamu.org` are configured as CNAME records pointing to the tunnel's UUID address (e.g., `...cfargotunnel.com`). See [DNS Configuration](../../cloudflare/dns.md#web-traffic-ingress) for more details.
