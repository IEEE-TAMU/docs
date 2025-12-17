# GitHub

[GitHub](https://github.com/) hosts all IEEE TAMU source code and provides CI/CD capabilities.

- **Organization:** [github.com/IEEE-TAMU](https://github.com/IEEE-TAMU)

## Repositories

### Applications
| Repository | Description |
|------------|-------------|
| [portal](https://github.com/IEEE-TAMU/portal) | Member Portal (Elixir/Phoenix) |
| [homepage](https://github.com/IEEE-TAMU/homepage) | Main website (Next.js) |
| [discord](https://github.com/IEEE-TAMU/discord) | Discord Bot |

### Infrastructure
| Repository | Description |
|------------|-------------|
| [cluster-infra](https://github.com/IEEE-TAMU/cluster-infra) | Kubernetes manifests and Flux GitOps |
| [nixos-config](https://github.com/IEEE-TAMU/nixos-config) | NixOS configuration for physical nodes |
| [docs](https://github.com/IEEE-TAMU/docs) | This documentation site |

### Cloudflare Workers
| Repository | Description |
|------------|-------------|
| [email-routing](https://github.com/IEEE-TAMU/email-routing) | Officer email forwarding |
| [marketplace-handler](https://github.com/IEEE-TAMU/marketplace-handler) | Flywire payment processing |

## CI/CD

GitHub Actions is used for:
- Automated testing on pull requests
- Container image builds pushed to GitHub Container Registry (ghcr.io)
- Cloudflare Worker deployments
- Documentation site builds

## Access Management

Repository access is managed through GitHub Teams:
- **Officers**: Write access to application repos
- **Infrastructure**: Admin access to cluster-infra and nixos-config
- **Alumni**: Read access for reference

## Secrets Management

GitHub Actions secrets are used for:
- `CLOUDFLARE_API_TOKEN`: Worker deployments
- Container registry authentication
- Deployment webhooks
