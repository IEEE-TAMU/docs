# MariaDB Operator

We use the MariaDB Operator to manage MariaDB database instances for our applications running on the cluster. This provides a Kubernetes-native way to provision and manage databases.

- **Operator Repository:** [https://github.com/IEEE-TAMU/cluster-infra/tree/master/infra/mariadb-operator](https://github.com/IEEE-TAMU/cluster-infra/tree/master/infra/mariadb-operator)
- **Database Repository:** [https://github.com/IEEE-TAMU/cluster-infra/tree/master/infra/mariadb](https://github.com/IEEE-TAMU/cluster-infra/tree/master/infra/mariadb)

## Overview

Instead of manually managing database servers or relying on external managed database services, we use the [MariaDB Operator](https://github.com/mariadb-operator/mariadb-operator). This allows us to define databases, users, and grants as Kubernetes Custom Resources (CRs).

## Why we use it

*   **GitOps**: Database configuration is stored in Git alongside our application code and infrastructure definitions.
*   **Automation**: The operator handles provisioning, backups, and updates automatically.
*   **Self-Service**: Developers can request a database for their application simply by adding a few lines of YAML to their deployment configuration.

## Primary Database Instance

We run a primary MariaDB instance named `mariadb` which serves as the main database server for our applications.

### Configuration
*   **Storage**: 1Gi Persistent Volume.
*   **Resources**: 128Mi RAM request, 1Gi RAM limit.
*   **Config**: Optimized for InnoDB with a 1GB buffer pool.

### Backups
Backups are automated and stored in Cloudflare R2.

*   **Schedule**: Every 6 hours (`9 */6 * * *`).
*   **Retention**: 30 days (720 hours).
*   **Destination**: `mariadb-backups` bucket on Cloudflare R2.
*   **Compression**: Gzip.

## Installation

The operator is installed via Helm using Flux. It includes:
*   **CRDs**: Custom Resource Definitions for `MariaDB`, `User`, `Grant`, etc.
*   **Controller**: The operator logic that reconciles the state of the cluster with the desired state defined in Git.
