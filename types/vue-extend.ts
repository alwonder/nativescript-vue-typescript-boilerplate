import { Vue } from 'vue-property-decorator';
import NativeScriptVue, { navigateTo, ModalOptions } from 'nativescript-vue';
import { View } from 'tns-core-modules/ui/core/view';

declare module 'vue-property-decorator' {
  interface Vue<V = View> extends NativeScriptVue<V> {
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
