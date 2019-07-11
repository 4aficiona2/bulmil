import { Component, Prop, h, JSX } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'b-tag',
})
export class Tag {
  @Prop() class: string;
  @Prop() color:
    | 'is-black'
    | 'is-dark'
    | 'is-light'
    | 'is-white'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';
  @Prop() size: 'is-normal' | 'is-medium' | 'is-large';
  @Prop() modifier: 'is-rounded' | 'is-delete';

  render(): JSX.Element {
    const tagClass = classNames('tag', this.color, this.size, this.modifier, this.class);

    return (
      <span class={tagClass}>
        <slot />
      </span>
    );
  }
}
