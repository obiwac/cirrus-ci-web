import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import PersistentWorkerPoolsList from '../workers/PersistentWorkerPoolsList';
import { OrganizationPersistentWorkerPools_info } from './__generated__/OrganizationPersistentWorkerPools_info.graphql';

interface Props {
  info: OrganizationPersistentWorkerPools_info;
}

function OrganizationPersistentWorkerPools(props: Props) {
  let info = props.info;
  return <PersistentWorkerPoolsList ownerUid={info.id} pools={info.persistentWorkerPools || []} />;
}

export default createFragmentContainer(OrganizationPersistentWorkerPools, {
  info: graphql`
    fragment OrganizationPersistentWorkerPools_info on GitHubOrganizationInfo {
      id
      persistentWorkerPools {
        id
        name
        enabledForPublic
      }
    }
  `,
});
