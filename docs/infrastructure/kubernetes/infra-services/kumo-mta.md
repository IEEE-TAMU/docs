# Kumo MTA

Kumo MTA is used to handle outbound emails from applications running on the cluster.

## DNS Configuration

To ensure email deliverability, we use DKIM signing. The public key is published in the DNS record `cluster._domainkey.ieeetamu.org`.

See [DNS Configuration](../../cloudflare/dns.md#cluster-email-kumo-mta) for more details.
