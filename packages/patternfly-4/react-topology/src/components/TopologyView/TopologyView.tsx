import * as React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';
import '@patternfly/react-styles/css/components/Topology/topology-view.css';

export interface TopologyViewProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the view */
  className?: string;
  /** Topology inner container (canvas)  */
  children?: React.ReactNode;
  /** Context toolbar to be displayed at the top of the view, should contain components for changing context */
  contextToolbar?: React.ReactNode;
  /** View toolbar to be displayed below the context toolbar, should contain components for changing view contents */
  viewToolbar?: React.ReactNode;
  /** Topology control bar (typically a TopologyControlBar), used to manipulate the graph layout */
  controlBar?: React.ReactNode;
  /** Topology side bar (typically a TopologySideBar), used to display information for elements in graph */
  sideBar?: React.ReactNode;
  sideBarOpen?: boolean;
}

export const TopologyView: React.FunctionComponent<TopologyViewProps> = ({
  className = '',
  contextToolbar = null,
  viewToolbar = null,
  children = null,
  controlBar = null,
  sideBar = null,
  sideBarOpen = false,
  ...props
}: TopologyViewProps) => {
  const containerClasses =
    `${sideBar ? 'pf-topology-container__with-sidebar' : ''}` +
    `${sideBarOpen ? ' pf-topology-container__with-sidebar--open' : ''}`;

  return (
    <Stack className={className} {...props}>
      {contextToolbar && <StackItem isFilled={false}>{contextToolbar}</StackItem>}
      {viewToolbar && <StackItem isFilled={false}>{viewToolbar}</StackItem>}
      <StackItem isFilled className={containerClasses}>
        <div className="pf-topology-content">
          {children}
          {controlBar && <span className="pf-topology-control-bar">{controlBar}</span>}
        </div>
        {sideBar}
      </StackItem>
    </Stack>
  );
};
