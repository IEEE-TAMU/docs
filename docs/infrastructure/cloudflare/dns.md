# DNS Configuration

We manage DNS for the following domains using Cloudflare:

- `ieeetamu.org` (Primary domain)
- `ieee-tamu.org` (Legacy domain)

## `ieeetamu.org` Records

### Web Traffic (Ingress)

Traffic to the root domain and subdomains is routed through a [Cloudflare Tunnel](../kubernetes/infra-services/cloudflare-tunnel.md) running on our Kubernetes cluster.

| Type | Name | Content | Notes |
|Data|---|---|---|
| CNAME | `ieeetamu.org` | `...cfargotunnel.com` | Proxied through Cloudflare |
| CNAME | `*.ieeetamu.org` | `...cfargotunnel.com` | Wildcard for subdomains |

### Email Routing (Inbound)

Inbound emails to `@ieeetamu.org` are handled by Cloudflare [Email Routing](./email-routing.md).

| Type | Name | Content | Notes |
|---|---|---|---|
| MX | `ieeetamu.org` | `route1.mx.cloudflare.net` | Priority 66 |
| MX | `ieeetamu.org` | `route2.mx.cloudflare.net` | Priority 6 |
| MX | `ieeetamu.org` | `route3.mx.cloudflare.net` | Priority 22 |
| TXT | `ieeetamu.org` | `v=spf1 ... include:_spf.mx.cloudflare.net ... ~all` | SPF Record |

### Transactional Email (Brevo)

We use [Brevo](../../external-services/brevo.md) for transactional emails.

| Type | Name | Content | Notes |
|---|---|---|---|
| MX | `brevomail.ieeetamu.org` | `smtp-relay.brevo.com` | |
| CNAME | `brevo1._domainkey` | `b1.ieeetamu-org.dkim.brevo.com` | DKIM |
| CNAME | `brevo2._domainkey` | `b2.ieeetamu-org.dkim.brevo.com` | DKIM |
| TXT | `ieeetamu.org` | `... include:spf.brevo.com ...` | SPF Include |
| TXT | `ieeetamu.org` | `brevo-code:2dc0ae653fb0b83da1c2232ebdcfc6db` | Verification Code |

### Cluster Email (Kumo MTA)

Outbound emails from the cluster (via [Kumo MTA](../kubernetes/infra-services/kumo-mta.md)) are signed with DKIM.

| Type | Name | Content | Notes |
|---|---|---|---|
| TXT | `cluster._domainkey` | `v=DKIM1; k=rsa; ...` | DKIM Public Key |

### Storage (R2)

| Type | Name | Content | Notes |
|---|---|---|---|
| CNAME | `officer-photos` | `public.r2.dev` | Cloudflare R2 Bucket |

### Other / Legacy

| Type | Name | Content | Notes |
|---|---|---|---|
| CNAME | `k2._domainkey` | `dkim2.mcsv.net` | Mailchimp DKIM (Legacy) |
| CNAME | `k3._domainkey` | `dkim3.mcsv.net` | Mailchimp DKIM (Legacy) |
| CNAME | `jgkp847n7ytzrdnh8aw4` | `verify.squarespace.com` | Squarespace Verification |
| TXT | `default._bimi` | `v=BIMI1; ...` | Brand Indicators for Message Identification |
| TXT | `_dmarc` | `v=DMARC1; p=quarantine; ...` | DMARC Policy |
