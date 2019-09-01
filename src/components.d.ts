/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface BBox {
    /**
    * CSS classes
    */
    'class': string;
  }
  interface BBreadcrumb {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Aligned to the center
    */
    'isCentered': boolean;
    /**
    * Aligned to the right
    */
    'isRight': boolean;
    /**
    * Separator
    */
    'separator': | 'has-arrow-separator'
    | 'has-bullet-separator'
    | 'has-dot-separator'
    | 'has-succeeds-separator';
    /**
    * Size
    */
    'size': 'is-small' | 'is-medium' | 'is-large';
  }
  interface BButton {
    /**
    * CSS classes
    */
    'class': string;
    /**
    * Color
    */
    'color': | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-danger'
    | 'is-warning'
    | 'is-white'
    | 'is-light'
    | 'is-dark'
    | 'is-black'
    | 'is-text';
    /**
    * Is disabled?
    */
    'disabled': boolean;
    /**
    * Display the button in full-width
    */
    'fullWidth': boolean;
    /**
    * Active state
    */
    'isActive': boolean;
    /**
    * Focused state
    */
    'isFocused': boolean;
    /**
    * Hovered state
    */
    'isHovered': boolean;
    /**
    * Is inverted
    */
    'isInverted': boolean;
    /**
    * Loading state
    */
    'isLoading': boolean;
    /**
    * Is outlined
    */
    'isOutlined': boolean;
    /**
    * Rounded button
    */
    'isRounded': boolean;
    /**
    * Static
    */
    'isStatic': boolean;
    /**
    * Size
    */
    'size': 'is-small' | 'is-medium' | 'is-large' | 'is-normal';
  }
  interface BButtons {
    /**
    * CSS classes
    */
    'class': string;
    /**
    * Buttons size
    */
    'size': 'are-small' | 'are-medium' | 'are-large';
  }
  interface BCard {
    /**
    * CSS Classes
    */
    'class': string;
  }
  interface BCheckbox {
    /**
    * Checked
    */
    'checked': boolean;
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Disabled
    */
    'disabled': boolean;
    /**
    * Label classes
    */
    'labelClass': string;
  }
  interface BColumn {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Narrow column
    */
    'isNarrow': boolean | Breakpoint[] | null;
    /**
    * Sizes
    */
    'sizes': any;
  }
  interface BColumns {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Columns gaps
    */
    'gaps': ['is-0' | 'is-1' | 'is-2' | 'is-3' | 'is-4' | 'is-5' | 'is-6' | 'is-7' | 'is-8'];
    /**
    * Centered
    */
    'isCentered': boolean;
    /**
    * Desktop
    */
    'isDesktop': boolean;
    /**
    * Gapless
    */
    'isGapless': boolean;
    /**
    * Mobile
    */
    'isMobile': boolean;
    /**
    * Multiline
    */
    'isMultiline': boolean;
    /**
    * Vertically centered
    */
    'isVcentered': boolean;
  }
  interface BContainer {
    /**
    * Container breakpoint
    */
    'breakpoint': 'is-widescreen' | 'is-fullhd';
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Fluid container
    */
    'isFluid': boolean;
  }
  interface BContent {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Content size
    */
    'size': 'is-small' | 'is-medium' | 'is-large';
  }
  interface BField {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Field size
    */
    'fieldSize': 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    /**
    * Has addons
    */
    'hasAddons': boolean;
    /**
    * Grouped field
    */
    'isGrouped': boolean;
    /**
    * Grouped, on multiline
    */
    'isGroupedMultiline': boolean;
    /**
    * Horizontal field
    */
    'isHorizontal': boolean;
    /**
    * Label
    */
    'label': string;
  }
  interface BFile {
    /**
    * Alignment
    */
    'alignment': 'is-centered' | 'is-right';
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': | 'is-white'
    | 'is-black'
    | 'is-light'
    | 'is-dark'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';
    /**
    * Add a placeholder for the selected file name
    */
    'hasName': boolean;
    /**
    * Boxed block
    */
    'isBoxed': boolean;
    /**
    * Expand the name to fill up the space
    */
    'isFullwidth': boolean;
    /**
    * Move the CTA to the right side
    */
    'isRight': boolean;
    /**
    * Name
    */
    'name': string;
    /**
    * CSS Classes
    */
    'size': 'is-small' | 'is-medium' | 'is-large';
  }
  interface BFooter {
    /**
    * CSS Classes
    */
    'class': string;
  }
  interface BIcon {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': 'has-text-info' | 'has-text-success' | 'has-text-warning' | 'has-text-danger';
    /**
    * Size
    */
    'size': 'is-small' | 'is-medium' | 'is-large';
  }
  interface BImage {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Size
    */
    'size': | 'is-16x16'
    | 'is-24x24'
    | 'is-32x32'
    | 'is-48x48'
    | 'is-64x64'
    | 'is-96x96'
    | 'is-128x128';
  }
  interface BInput {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Control Classes
    */
    'controlClass': string;
    /**
    * Disabled state
    */
    'disabled': boolean;
    /**
    * Loading state
    */
    'isLoading': boolean;
    /**
    * Rounded
    */
    'isRounded': boolean;
    /**
    * Removes the background, border, shadow, and horizontal padding
    */
    'isStatic': boolean;
    /**
    * Name
    */
    'name': string;
    /**
    * The input will look similar to a normal one, but is not editable and has no shadow
    */
    'readonly': boolean;
    /**
    * Required
    */
    'required': boolean;
    /**
    * Size
    */
    'size': 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    /**
    * State
    */
    'state': 'is-hovered' | 'is-focused';
    /**
    * Type
    */
    'type': 'text' | 'number' | 'email' | 'password';
    /**
    * Value
    */
    'value': string | number;
  }
  interface BNotification {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Dismissable
    */
    'dismissable': boolean;
  }
  interface BPagination {
    /**
    * Alignment
    */
    'alignment': 'is-centered' | 'is-right';
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Rounded
    */
    'isRounded': boolean;
    /**
    * Pagination size
    */
    'size': 'is-small' | 'is-medium' | 'is-large';
  }
  interface BProgress {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Maximum value
    */
    'max': number;
    /**
    * Size
    */
    'size': 'is-small' | 'is-medium' | 'is-large';
    /**
    * Value
    */
    'value': number;
  }
  interface BRadio {
    /**
    * Checked
    */
    'checked': boolean;
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Label Classes
    */
    'labelClass': string;
    /**
    * Name
    */
    'name': string;
  }
  interface BSection {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Section size
    */
    'size': 'is-medium' | 'is-large';
  }
  interface BSelect {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Control classes
    */
    'controlClass': string;
    /**
    * Loading state
    */
    'isLoading': boolean;
    /**
    * Allows multiple selection
    */
    'isMultiple': boolean;
    /**
    * Rounded
    */
    'isRounded': boolean;
    /**
    * Size
    */
    'size': 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    /**
    * State
    */
    'state': 'is-hovered' | 'is-focused';
    /**
    * Value
    */
    'value': string | number;
  }
  interface BTable {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Bordered
    */
    'isBordered': boolean;
    /**
    * Fullwidth
    */
    'isFullwidth': boolean;
    /**
    * Hoverable
    */
    'isHoverable': boolean;
    /**
    * Narrow
    */
    'isNarrow': boolean;
    /**
    * Striped
    */
    'isStriped': boolean;
  }
  interface BTabs {
    /**
    * Alignment
    */
    'alignment': 'is-centered' | 'is-right';
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Full width
    */
    'isFullwidth': boolean;
    /**
    * Rounded
    */
    'isRounded': boolean;
    /**
    * Pagination size
    */
    'size': 'is-small' | 'is-medium' | 'is-large';
    /**
    * Style
    */
    'tabStyle': 'is-boxed' | 'is-toggle';
  }
  interface BTag {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': | 'is-black'
    | 'is-dark'
    | 'is-light'
    | 'is-white'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';
    /**
    * Modifier
    */
    'modifier': 'is-rounded' | 'is-delete';
    /**
    * Size
    */
    'size': 'is-normal' | 'is-medium' | 'is-large';
  }
  interface BTags {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Has addons
    */
    'hasAddons': boolean;
  }
  interface BTextarea {
    /**
    * CSS Classes
    */
    'class': string;
    /**
    * Color
    */
    'color': 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Control class
    */
    'controlClass': string;
    /**
    * Disabled state
    */
    'disabled': boolean;
    /**
    * Fixed size
    */
    'hasFixedSize': boolean;
    /**
    * Loading state
    */
    'isLoading': boolean;
    /**
    * Readonly state
    */
    'readonly': boolean;
    /**
    * Rows
    */
    'rows': number;
    /**
    * Size
    */
    'size': 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    /**
    * State
    */
    'state': 'is-hovered' | 'is-focused';
    /**
    * Value
    */
    'value': string | number;
  }
}

declare global {


  interface HTMLBBoxElement extends Components.BBox, HTMLStencilElement {}
  var HTMLBBoxElement: {
    prototype: HTMLBBoxElement;
    new (): HTMLBBoxElement;
  };

  interface HTMLBBreadcrumbElement extends Components.BBreadcrumb, HTMLStencilElement {}
  var HTMLBBreadcrumbElement: {
    prototype: HTMLBBreadcrumbElement;
    new (): HTMLBBreadcrumbElement;
  };

  interface HTMLBButtonElement extends Components.BButton, HTMLStencilElement {}
  var HTMLBButtonElement: {
    prototype: HTMLBButtonElement;
    new (): HTMLBButtonElement;
  };

  interface HTMLBButtonsElement extends Components.BButtons, HTMLStencilElement {}
  var HTMLBButtonsElement: {
    prototype: HTMLBButtonsElement;
    new (): HTMLBButtonsElement;
  };

  interface HTMLBCardElement extends Components.BCard, HTMLStencilElement {}
  var HTMLBCardElement: {
    prototype: HTMLBCardElement;
    new (): HTMLBCardElement;
  };

  interface HTMLBCheckboxElement extends Components.BCheckbox, HTMLStencilElement {}
  var HTMLBCheckboxElement: {
    prototype: HTMLBCheckboxElement;
    new (): HTMLBCheckboxElement;
  };

  interface HTMLBColumnElement extends Components.BColumn, HTMLStencilElement {}
  var HTMLBColumnElement: {
    prototype: HTMLBColumnElement;
    new (): HTMLBColumnElement;
  };

  interface HTMLBColumnsElement extends Components.BColumns, HTMLStencilElement {}
  var HTMLBColumnsElement: {
    prototype: HTMLBColumnsElement;
    new (): HTMLBColumnsElement;
  };

  interface HTMLBContainerElement extends Components.BContainer, HTMLStencilElement {}
  var HTMLBContainerElement: {
    prototype: HTMLBContainerElement;
    new (): HTMLBContainerElement;
  };

  interface HTMLBContentElement extends Components.BContent, HTMLStencilElement {}
  var HTMLBContentElement: {
    prototype: HTMLBContentElement;
    new (): HTMLBContentElement;
  };

  interface HTMLBFieldElement extends Components.BField, HTMLStencilElement {}
  var HTMLBFieldElement: {
    prototype: HTMLBFieldElement;
    new (): HTMLBFieldElement;
  };

  interface HTMLBFileElement extends Components.BFile, HTMLStencilElement {}
  var HTMLBFileElement: {
    prototype: HTMLBFileElement;
    new (): HTMLBFileElement;
  };

  interface HTMLBFooterElement extends Components.BFooter, HTMLStencilElement {}
  var HTMLBFooterElement: {
    prototype: HTMLBFooterElement;
    new (): HTMLBFooterElement;
  };

  interface HTMLBIconElement extends Components.BIcon, HTMLStencilElement {}
  var HTMLBIconElement: {
    prototype: HTMLBIconElement;
    new (): HTMLBIconElement;
  };

  interface HTMLBImageElement extends Components.BImage, HTMLStencilElement {}
  var HTMLBImageElement: {
    prototype: HTMLBImageElement;
    new (): HTMLBImageElement;
  };

  interface HTMLBInputElement extends Components.BInput, HTMLStencilElement {}
  var HTMLBInputElement: {
    prototype: HTMLBInputElement;
    new (): HTMLBInputElement;
  };

  interface HTMLBNotificationElement extends Components.BNotification, HTMLStencilElement {}
  var HTMLBNotificationElement: {
    prototype: HTMLBNotificationElement;
    new (): HTMLBNotificationElement;
  };

  interface HTMLBPaginationElement extends Components.BPagination, HTMLStencilElement {}
  var HTMLBPaginationElement: {
    prototype: HTMLBPaginationElement;
    new (): HTMLBPaginationElement;
  };

  interface HTMLBProgressElement extends Components.BProgress, HTMLStencilElement {}
  var HTMLBProgressElement: {
    prototype: HTMLBProgressElement;
    new (): HTMLBProgressElement;
  };

  interface HTMLBRadioElement extends Components.BRadio, HTMLStencilElement {}
  var HTMLBRadioElement: {
    prototype: HTMLBRadioElement;
    new (): HTMLBRadioElement;
  };

  interface HTMLBSectionElement extends Components.BSection, HTMLStencilElement {}
  var HTMLBSectionElement: {
    prototype: HTMLBSectionElement;
    new (): HTMLBSectionElement;
  };

  interface HTMLBSelectElement extends Components.BSelect, HTMLStencilElement {}
  var HTMLBSelectElement: {
    prototype: HTMLBSelectElement;
    new (): HTMLBSelectElement;
  };

  interface HTMLBTableElement extends Components.BTable, HTMLStencilElement {}
  var HTMLBTableElement: {
    prototype: HTMLBTableElement;
    new (): HTMLBTableElement;
  };

  interface HTMLBTabsElement extends Components.BTabs, HTMLStencilElement {}
  var HTMLBTabsElement: {
    prototype: HTMLBTabsElement;
    new (): HTMLBTabsElement;
  };

  interface HTMLBTagElement extends Components.BTag, HTMLStencilElement {}
  var HTMLBTagElement: {
    prototype: HTMLBTagElement;
    new (): HTMLBTagElement;
  };

  interface HTMLBTagsElement extends Components.BTags, HTMLStencilElement {}
  var HTMLBTagsElement: {
    prototype: HTMLBTagsElement;
    new (): HTMLBTagsElement;
  };

  interface HTMLBTextareaElement extends Components.BTextarea, HTMLStencilElement {}
  var HTMLBTextareaElement: {
    prototype: HTMLBTextareaElement;
    new (): HTMLBTextareaElement;
  };
  interface HTMLElementTagNameMap {
    'b-box': HTMLBBoxElement;
    'b-breadcrumb': HTMLBBreadcrumbElement;
    'b-button': HTMLBButtonElement;
    'b-buttons': HTMLBButtonsElement;
    'b-card': HTMLBCardElement;
    'b-checkbox': HTMLBCheckboxElement;
    'b-column': HTMLBColumnElement;
    'b-columns': HTMLBColumnsElement;
    'b-container': HTMLBContainerElement;
    'b-content': HTMLBContentElement;
    'b-field': HTMLBFieldElement;
    'b-file': HTMLBFileElement;
    'b-footer': HTMLBFooterElement;
    'b-icon': HTMLBIconElement;
    'b-image': HTMLBImageElement;
    'b-input': HTMLBInputElement;
    'b-notification': HTMLBNotificationElement;
    'b-pagination': HTMLBPaginationElement;
    'b-progress': HTMLBProgressElement;
    'b-radio': HTMLBRadioElement;
    'b-section': HTMLBSectionElement;
    'b-select': HTMLBSelectElement;
    'b-table': HTMLBTableElement;
    'b-tabs': HTMLBTabsElement;
    'b-tag': HTMLBTagElement;
    'b-tags': HTMLBTagsElement;
    'b-textarea': HTMLBTextareaElement;
  }
}

declare namespace LocalJSX {
  interface BBox extends JSXBase.HTMLAttributes<HTMLBBoxElement> {
    /**
    * CSS classes
    */
    'class'?: string;
  }
  interface BBreadcrumb extends JSXBase.HTMLAttributes<HTMLBBreadcrumbElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Aligned to the center
    */
    'isCentered'?: boolean;
    /**
    * Aligned to the right
    */
    'isRight'?: boolean;
    /**
    * Separator
    */
    'separator'?: | 'has-arrow-separator'
    | 'has-bullet-separator'
    | 'has-dot-separator'
    | 'has-succeeds-separator';
    /**
    * Size
    */
    'size'?: 'is-small' | 'is-medium' | 'is-large';
  }
  interface BButton extends JSXBase.HTMLAttributes<HTMLBButtonElement> {
    /**
    * CSS classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-danger'
    | 'is-warning'
    | 'is-white'
    | 'is-light'
    | 'is-dark'
    | 'is-black'
    | 'is-text';
    /**
    * Is disabled?
    */
    'disabled'?: boolean;
    /**
    * Display the button in full-width
    */
    'fullWidth'?: boolean;
    /**
    * Active state
    */
    'isActive'?: boolean;
    /**
    * Focused state
    */
    'isFocused'?: boolean;
    /**
    * Hovered state
    */
    'isHovered'?: boolean;
    /**
    * Is inverted
    */
    'isInverted'?: boolean;
    /**
    * Loading state
    */
    'isLoading'?: boolean;
    /**
    * Is outlined
    */
    'isOutlined'?: boolean;
    /**
    * Rounded button
    */
    'isRounded'?: boolean;
    /**
    * Static
    */
    'isStatic'?: boolean;
    /**
    * Clicked event
    */
    'onClicked'?: (event: CustomEvent<any>) => void;
    /**
    * Size
    */
    'size'?: 'is-small' | 'is-medium' | 'is-large' | 'is-normal';
  }
  interface BButtons extends JSXBase.HTMLAttributes<HTMLBButtonsElement> {
    /**
    * CSS classes
    */
    'class'?: string;
    /**
    * Buttons size
    */
    'size'?: 'are-small' | 'are-medium' | 'are-large';
  }
  interface BCard extends JSXBase.HTMLAttributes<HTMLBCardElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
  }
  interface BCheckbox extends JSXBase.HTMLAttributes<HTMLBCheckboxElement> {
    /**
    * Checked
    */
    'checked'?: boolean;
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Disabled
    */
    'disabled'?: boolean;
    /**
    * Label classes
    */
    'labelClass'?: string;
  }
  interface BColumn extends JSXBase.HTMLAttributes<HTMLBColumnElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Narrow column
    */
    'isNarrow'?: boolean | Breakpoint[] | null;
    /**
    * Sizes
    */
    'sizes'?: any;
  }
  interface BColumns extends JSXBase.HTMLAttributes<HTMLBColumnsElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Columns gaps
    */
    'gaps'?: ['is-0' | 'is-1' | 'is-2' | 'is-3' | 'is-4' | 'is-5' | 'is-6' | 'is-7' | 'is-8'];
    /**
    * Centered
    */
    'isCentered'?: boolean;
    /**
    * Desktop
    */
    'isDesktop'?: boolean;
    /**
    * Gapless
    */
    'isGapless'?: boolean;
    /**
    * Mobile
    */
    'isMobile'?: boolean;
    /**
    * Multiline
    */
    'isMultiline'?: boolean;
    /**
    * Vertically centered
    */
    'isVcentered'?: boolean;
  }
  interface BContainer extends JSXBase.HTMLAttributes<HTMLBContainerElement> {
    /**
    * Container breakpoint
    */
    'breakpoint'?: 'is-widescreen' | 'is-fullhd';
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Fluid container
    */
    'isFluid'?: boolean;
  }
  interface BContent extends JSXBase.HTMLAttributes<HTMLBContentElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Content size
    */
    'size'?: 'is-small' | 'is-medium' | 'is-large';
  }
  interface BField extends JSXBase.HTMLAttributes<HTMLBFieldElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Field size
    */
    'fieldSize'?: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    /**
    * Has addons
    */
    'hasAddons'?: boolean;
    /**
    * Grouped field
    */
    'isGrouped'?: boolean;
    /**
    * Grouped, on multiline
    */
    'isGroupedMultiline'?: boolean;
    /**
    * Horizontal field
    */
    'isHorizontal'?: boolean;
    /**
    * Label
    */
    'label'?: string;
  }
  interface BFile extends JSXBase.HTMLAttributes<HTMLBFileElement> {
    /**
    * Alignment
    */
    'alignment'?: 'is-centered' | 'is-right';
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: | 'is-white'
    | 'is-black'
    | 'is-light'
    | 'is-dark'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';
    /**
    * Add a placeholder for the selected file name
    */
    'hasName'?: boolean;
    /**
    * Boxed block
    */
    'isBoxed'?: boolean;
    /**
    * Expand the name to fill up the space
    */
    'isFullwidth'?: boolean;
    /**
    * Move the CTA to the right side
    */
    'isRight'?: boolean;
    /**
    * Name
    */
    'name'?: string;
    /**
    * CSS Classes
    */
    'size'?: 'is-small' | 'is-medium' | 'is-large';
  }
  interface BFooter extends JSXBase.HTMLAttributes<HTMLBFooterElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
  }
  interface BIcon extends JSXBase.HTMLAttributes<HTMLBIconElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: 'has-text-info' | 'has-text-success' | 'has-text-warning' | 'has-text-danger';
    /**
    * Size
    */
    'size'?: 'is-small' | 'is-medium' | 'is-large';
  }
  interface BImage extends JSXBase.HTMLAttributes<HTMLBImageElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Size
    */
    'size'?: | 'is-16x16'
    | 'is-24x24'
    | 'is-32x32'
    | 'is-48x48'
    | 'is-64x64'
    | 'is-96x96'
    | 'is-128x128';
  }
  interface BInput extends JSXBase.HTMLAttributes<HTMLBInputElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Control Classes
    */
    'controlClass'?: string;
    /**
    * Disabled state
    */
    'disabled'?: boolean;
    /**
    * Loading state
    */
    'isLoading'?: boolean;
    /**
    * Rounded
    */
    'isRounded'?: boolean;
    /**
    * Removes the background, border, shadow, and horizontal padding
    */
    'isStatic'?: boolean;
    /**
    * Name
    */
    'name'?: string;
    /**
    * The input will look similar to a normal one, but is not editable and has no shadow
    */
    'readonly'?: boolean;
    /**
    * Required
    */
    'required'?: boolean;
    /**
    * Size
    */
    'size'?: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    /**
    * State
    */
    'state'?: 'is-hovered' | 'is-focused';
    /**
    * Type
    */
    'type'?: 'text' | 'number' | 'email' | 'password';
    /**
    * Value
    */
    'value'?: string | number;
  }
  interface BNotification extends JSXBase.HTMLAttributes<HTMLBNotificationElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Dismissable
    */
    'dismissable'?: boolean;
  }
  interface BPagination extends JSXBase.HTMLAttributes<HTMLBPaginationElement> {
    /**
    * Alignment
    */
    'alignment'?: 'is-centered' | 'is-right';
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Rounded
    */
    'isRounded'?: boolean;
    /**
    * Pagination size
    */
    'size'?: 'is-small' | 'is-medium' | 'is-large';
  }
  interface BProgress extends JSXBase.HTMLAttributes<HTMLBProgressElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Maximum value
    */
    'max'?: number;
    /**
    * Size
    */
    'size'?: 'is-small' | 'is-medium' | 'is-large';
    /**
    * Value
    */
    'value'?: number;
  }
  interface BRadio extends JSXBase.HTMLAttributes<HTMLBRadioElement> {
    /**
    * Checked
    */
    'checked'?: boolean;
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Label Classes
    */
    'labelClass'?: string;
    /**
    * Name
    */
    'name'?: string;
  }
  interface BSection extends JSXBase.HTMLAttributes<HTMLBSectionElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Section size
    */
    'size'?: 'is-medium' | 'is-large';
  }
  interface BSelect extends JSXBase.HTMLAttributes<HTMLBSelectElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Control classes
    */
    'controlClass'?: string;
    /**
    * Loading state
    */
    'isLoading'?: boolean;
    /**
    * Allows multiple selection
    */
    'isMultiple'?: boolean;
    /**
    * Rounded
    */
    'isRounded'?: boolean;
    /**
    * Size
    */
    'size'?: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    /**
    * State
    */
    'state'?: 'is-hovered' | 'is-focused';
    /**
    * Value
    */
    'value'?: string | number;
  }
  interface BTable extends JSXBase.HTMLAttributes<HTMLBTableElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Bordered
    */
    'isBordered'?: boolean;
    /**
    * Fullwidth
    */
    'isFullwidth'?: boolean;
    /**
    * Hoverable
    */
    'isHoverable'?: boolean;
    /**
    * Narrow
    */
    'isNarrow'?: boolean;
    /**
    * Striped
    */
    'isStriped'?: boolean;
  }
  interface BTabs extends JSXBase.HTMLAttributes<HTMLBTabsElement> {
    /**
    * Alignment
    */
    'alignment'?: 'is-centered' | 'is-right';
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Full width
    */
    'isFullwidth'?: boolean;
    /**
    * Rounded
    */
    'isRounded'?: boolean;
    /**
    * Pagination size
    */
    'size'?: 'is-small' | 'is-medium' | 'is-large';
    /**
    * Style
    */
    'tabStyle'?: 'is-boxed' | 'is-toggle';
  }
  interface BTag extends JSXBase.HTMLAttributes<HTMLBTagElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: | 'is-black'
    | 'is-dark'
    | 'is-light'
    | 'is-white'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';
    /**
    * Modifier
    */
    'modifier'?: 'is-rounded' | 'is-delete';
    /**
    * Size
    */
    'size'?: 'is-normal' | 'is-medium' | 'is-large';
  }
  interface BTags extends JSXBase.HTMLAttributes<HTMLBTagsElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Has addons
    */
    'hasAddons'?: boolean;
  }
  interface BTextarea extends JSXBase.HTMLAttributes<HTMLBTextareaElement> {
    /**
    * CSS Classes
    */
    'class'?: string;
    /**
    * Color
    */
    'color'?: 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    /**
    * Control class
    */
    'controlClass'?: string;
    /**
    * Disabled state
    */
    'disabled'?: boolean;
    /**
    * Fixed size
    */
    'hasFixedSize'?: boolean;
    /**
    * Loading state
    */
    'isLoading'?: boolean;
    /**
    * Readonly state
    */
    'readonly'?: boolean;
    /**
    * Rows
    */
    'rows'?: number;
    /**
    * Size
    */
    'size'?: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    /**
    * State
    */
    'state'?: 'is-hovered' | 'is-focused';
    /**
    * Value
    */
    'value'?: string | number;
  }

  interface IntrinsicElements {
    'b-box': BBox;
    'b-breadcrumb': BBreadcrumb;
    'b-button': BButton;
    'b-buttons': BButtons;
    'b-card': BCard;
    'b-checkbox': BCheckbox;
    'b-column': BColumn;
    'b-columns': BColumns;
    'b-container': BContainer;
    'b-content': BContent;
    'b-field': BField;
    'b-file': BFile;
    'b-footer': BFooter;
    'b-icon': BIcon;
    'b-image': BImage;
    'b-input': BInput;
    'b-notification': BNotification;
    'b-pagination': BPagination;
    'b-progress': BProgress;
    'b-radio': BRadio;
    'b-section': BSection;
    'b-select': BSelect;
    'b-table': BTable;
    'b-tabs': BTabs;
    'b-tag': BTag;
    'b-tags': BTags;
    'b-textarea': BTextarea;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


