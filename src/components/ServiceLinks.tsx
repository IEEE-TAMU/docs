import React from 'react';

interface ServiceLinksProps {
  repo?: string;
  deploymentPaths?: string[];
  url?: string;
  urls?: { label: string; href: string }[];
}

const GITHUB_ORG = 'https://github.com/IEEE-TAMU';
const CLUSTER_INFRA_PATH = 'cluster-infra';

export default function ServiceLinks({repo, deploymentPaths, url, urls}: ServiceLinksProps): React.ReactElement {
  const repoUrl = repo ? `${GITHUB_ORG}/${repo}` : undefined;

  return (
    <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
      {repoUrl && (
        <li>
          <strong>Repository:</strong>{' '}
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            {repoUrl}
          </a>
        </li>
      )}
      {deploymentPaths?.map((path) => (
        <li key={path}>
          <strong>Deployment:</strong>{' '}
          <a href={`${GITHUB_ORG}/${CLUSTER_INFRA_PATH}/tree/master/${path}`} target="_blank" rel="noopener noreferrer">
            {path}
          </a>
        </li>
      ))}
      {url && (
        <li>
          <strong>URL:</strong>{' '}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </li>
      )}
      {urls?.map((u) => (
        <li key={u.href}>
          <strong>{u.label}:</strong>{' '}
          <a href={u.href} target="_blank" rel="noopener noreferrer">
            {u.href}
          </a>
        </li>
      ))}
    </ul>
  );
}
