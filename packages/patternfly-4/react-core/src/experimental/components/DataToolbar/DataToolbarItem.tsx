import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';

import {
  DataToolbarBreakpointMod,
  DataToolbarSpacer,
  formatBreakpointMods,
  formatSpacers
} from './DataToolbarUtils';

export enum DataToolbarItemVariant {
  separator = 'separator',
  'bulk-select' = 'bulk-select',
  'overflow-menu' = 'overflow-menu',
  pagination = 'pagination',
  'search-filter' = 'search-filter',
  label = 'label',
}

export interface DataToolbarItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes applied to root element of the Data toolbar item */
  className?: string;
  /** A type modifier which modifies spacing specifically depending on the type of item */
  variant?: DataToolbarItemVariant |
    'separator' | 'bulk-select' | 'overflow-menu' | 'pagination' | 'search-filter' | 'label';
  /** An array of objects representing the various modifiers to apply to the Data toolbar item at various breakpoints */
  breakpointMods?: DataToolbarBreakpointMod[];
  /** An array of objects representing the various spacers to apply to the Data toolbar item at various breakpoints */
  spacers?: DataToolbarSpacer[];
  /** id for this Data toolbar item */
  id?: string;
  /** Content to be rendered inside the Data toolbar item */
  children?: React.ReactNode;
}

export const DataToolbarItem: React.FunctionComponent<DataToolbarItemProps> = ({
    className,
    variant,
    breakpointMods = [] as DataToolbarBreakpointMod[],
    spacers = [] as DataToolbarSpacer[],
    id,
    children,
    ...props
  }: DataToolbarItemProps) => {

  const labelVariant = variant === 'label';

  return (
    <div
      className={css(
        styles.dataToolbarItem,
        variant && getModifier(styles, variant),
        formatBreakpointMods(breakpointMods),
        formatSpacers(spacers),
        className)}
      {...labelVariant && { 'aria-hidden': true }}
      id={id}
      {...props}
    >
      {children}
    </div>
  );
};
