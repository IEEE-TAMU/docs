# Email Routing Worker

We use a Cloudflare Worker to handle email routing. This allows us to provide `ieeetamu.org` email addresses to officers.

- **Repository:** [https://github.com/IEEE-TAMU/email-routing](https://github.com/IEEE-TAMU/email-routing)

This worker intercepts incoming emails and routes them to the appropriate personal email addresses of the officers.

## How it Works

The system is built using Cloudflare Workers and is automatically deployed using GitHub Apps. It uses a routing table defined in the code to determine where to forward incoming emails.

## Management

### Adding a New Officer

1.  **Verify the Destination Email**: The officer's personal email (e.g., `netid@tamu.edu`) must be verified with Cloudflare before it can receive routed emails.
    ```bash
    npm run add-email <email>
    ```
    The officer will receive a verification email from Cloudflare and must click the link to confirm.

2.  **Configure Routing**: Edit the `src/routes.ts` file in the repository to add a new routing rule.
    ```typescript
    { "destination": "president@ieeetamu.org", "recipients": ["netid@tamu.edu"] }
    ```

### Removing an Officer

1.  **Remove Routing**: Remove the officer's entry from `src/routes.ts`.
2.  **Remove Verification** (Optional): If the officer is no longer serving, you can remove their email from the verified list to free up space (limit of 200 verified emails).
    ```bash
    npm run delete-email <email>
    ```

### Checking Verification Status

To check which emails are currently verified:
```bash
npm run list-email
```

## DNS Configuration

For this worker to function, the domain's MX records must point to Cloudflare's email routing servers. See [DNS Configuration](./dns.md#email-routing-inbound) for the specific records.
