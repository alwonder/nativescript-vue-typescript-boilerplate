import 'vue-property-decorator';
import { navigateTo, ModalOptions } from 'nativescript-vue';
import { View } from 'tns-core-modules/ui/core/view';

declare module 'vue-property-decorator' {
  /**
   * All the properties are picked from
   * NativeScriptVue interface from nativescript-vue
   * module because vue-property-decorator doesn't
   * know about nativescript-vue properties
   */
  interface Vue<V = View> {
    nativeView: V

    $navigateTo: navigateTo
    $navigateBack: () => void

    $modal?: { close: (data?: any) => Promise<typeof data> };

    /**
     * Open a modal using a component
     * @param {typeof Vue} component
     * @param {ModalOptions} options
     * @returns {any}
     */
    $showModal: (component: typeof Vue, options?: ModalOptions) => Promise<any>;

    /**
     * starts the nativescript application
     */
    $start: () => void
  }
}
