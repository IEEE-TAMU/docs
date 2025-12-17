# Member Portal

The Member Portal is the central hub for IEEE TAMU operations, handling member management, event scheduling, and administrative tasks.

- **App Repository:** [https://github.com/IEEE-TAMU/portal](https://github.com/IEEE-TAMU/portal)
- **Deployment Repository:** [https://github.com/IEEE-TAMU/cluster-infra/tree/master/apps/portal](https://github.com/IEEE-TAMU/cluster-infra/tree/master/apps/portal)
- **URL:** [https://portal.ieeetamu.org](https://portal.ieeetamu.org)

## Technology Stack

The application is built with **Elixir** and the **Phoenix Framework**. It leverages the reliability and concurrency of the BEAM VM to handle real-time features and concurrent user requests efficiently.

## Core Functionality

### Event Management (Authoritative Source)
The Portal serves as the **single source of truth** for all organization events.
*   **Creation**: Officers create and manage events directly in the portal.
*   **Distribution**: It exposes a public iCal feed that is consumed by:
    *   The [Homepage](./homepage.md) (for the events previewer).
    *   The [Discord Bot](./discord-bot.md) (to sync Guild Scheduled Events).
*   **Check-ins**: Officers can "start" an event to generate a check-in code or QR code for members to mark their attendance.

### Member Management
*   **Database**: Stores comprehensive member information.
*   **Resume Bank**: Members can upload resumes, which are stored in Cloudflare R2.
*   **Dues Tracking**: Automatically updates payment status via webhooks from the [Marketplace Handler](../workers/marketplace-handler.md).

### Administration
Officers have access to a suite of admin tools:
*   **Reporting**: Download CSV reports for dues payments and event attendance.
*   **User Management**: View and edit member details.
*   **Event Control**: Start/stop events and manage attendance records.

## Deployment

The application is deployed on the Kubernetes cluster.
*   **Database**: Connects to a dedicated MariaDB instance provisioned by the [MariaDB Operator](../../infrastructure/kubernetes/infra-services/mariadb.md).
*   **Ingress**: Exposed via Traefik at `portal.ieeetamu.org`.
