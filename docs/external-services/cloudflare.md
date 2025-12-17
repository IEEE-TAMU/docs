# Cloudflare

[Cloudflare](https://www.cloudflare.com/) provides multiple services for IEEE TAMU infrastructure.

## Services Used

### DNS
All DNS records for `ieeetamu.org` and `ieee-tamu.org` are managed through Cloudflare.

See [DNS Configuration](../infrastructure/cloudflare/dns.md) for specific records.

### CDN & Proxy
Cloudflare proxies traffic to our services, providing:
- DDoS protection
- SSL/TLS termination
- Caching for static assets

### Cloudflare Tunnel
Secure ingress to our Kubernetes cluster without exposing public IPs.

See [Cloudflare Tunnel](../infrastructure/kubernetes/infra-services/cloudflare-tunnel.md) for details.

### Workers
Serverless functions for automation:
- [Email Routing Worker](../internal-services/workers/email-routing.md)
- [Marketplace Handler Worker](../internal-services/workers/marketplace-handler.md)

### R2 Storage
Object storage used by the [Member Portal](../internal-services/apps/member-portal.md) for:
- Resume bank storage
- Static asset hosting

### Email Routing
Inbound email routing to Workers for processing officer emails.

## Account Access

Cloudflare account access is managed by senior officers. API tokens are stored in [Vaultwarden](../internal-services/apps/vaultwarden.md) and used for:
- Worker deployments (via GitHub Actions)
- DNS updates
- Tunnel configuration
