
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'CheckboxField': typeof import("../components/CheckboxField.vue")['default']
    'DropdownField': typeof import("../components/DropdownField.vue")['default']
    'FormField': typeof import("../components/FormField.vue")['default']
    'MediaTypesAnimationForm': typeof import("../components/MediaTypes/AnimationForm.vue")['default']
    'MediaTypesConsultationForm': typeof import("../components/MediaTypes/ConsultationForm.vue")['default']
    'MediaTypesDIYForm': typeof import("../components/MediaTypes/DIYForm.vue")['default']
    'MediaTypesDVDRipForm': typeof import("../components/MediaTypes/DVDRipForm.vue")['default']
    'MediaTypesGlossaryForm': typeof import("../components/MediaTypes/GlossaryForm.vue")['default']
    'MediaTypesGraphicsForm': typeof import("../components/MediaTypes/GraphicsForm.vue")['default']
    'MediaTypesH5PForm': typeof import("../components/MediaTypes/H5PForm.vue")['default']
    'MediaTypesLectureForm': typeof import("../components/MediaTypes/LectureForm.vue")['default']
    'MediaTypesOneTermDevelopmentForm': typeof import("../components/MediaTypes/OneTermDevelopmentForm.vue")['default']
    'MediaTypesSupportForm': typeof import("../components/MediaTypes/SupportForm.vue")['default']
    'MediaTypesTimelineForm': typeof import("../components/MediaTypes/TimelineForm.vue")['default']
    'MediaTypesVideoForm': typeof import("../components/MediaTypes/VideoForm.vue")['default']
    'MediaTypesWebForm': typeof import("../components/MediaTypes/WebForm.vue")['default']
    'MultimediaTypeSelection': typeof import("../components/MultimediaTypeSelection.vue")['default']
    'Navbar': typeof import("../components/Navbar.vue")['default']
    'TextAreaField': typeof import("../components/TextAreaField.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyCheckboxField': LazyComponent<typeof import("../components/CheckboxField.vue")['default']>
    'LazyDropdownField': LazyComponent<typeof import("../components/DropdownField.vue")['default']>
    'LazyFormField': LazyComponent<typeof import("../components/FormField.vue")['default']>
    'LazyMediaTypesAnimationForm': LazyComponent<typeof import("../components/MediaTypes/AnimationForm.vue")['default']>
    'LazyMediaTypesConsultationForm': LazyComponent<typeof import("../components/MediaTypes/ConsultationForm.vue")['default']>
    'LazyMediaTypesDIYForm': LazyComponent<typeof import("../components/MediaTypes/DIYForm.vue")['default']>
    'LazyMediaTypesDVDRipForm': LazyComponent<typeof import("../components/MediaTypes/DVDRipForm.vue")['default']>
    'LazyMediaTypesGlossaryForm': LazyComponent<typeof import("../components/MediaTypes/GlossaryForm.vue")['default']>
    'LazyMediaTypesGraphicsForm': LazyComponent<typeof import("../components/MediaTypes/GraphicsForm.vue")['default']>
    'LazyMediaTypesH5PForm': LazyComponent<typeof import("../components/MediaTypes/H5PForm.vue")['default']>
    'LazyMediaTypesLectureForm': LazyComponent<typeof import("../components/MediaTypes/LectureForm.vue")['default']>
    'LazyMediaTypesOneTermDevelopmentForm': LazyComponent<typeof import("../components/MediaTypes/OneTermDevelopmentForm.vue")['default']>
    'LazyMediaTypesSupportForm': LazyComponent<typeof import("../components/MediaTypes/SupportForm.vue")['default']>
    'LazyMediaTypesTimelineForm': LazyComponent<typeof import("../components/MediaTypes/TimelineForm.vue")['default']>
    'LazyMediaTypesVideoForm': LazyComponent<typeof import("../components/MediaTypes/VideoForm.vue")['default']>
    'LazyMediaTypesWebForm': LazyComponent<typeof import("../components/MediaTypes/WebForm.vue")['default']>
    'LazyMultimediaTypeSelection': LazyComponent<typeof import("../components/MultimediaTypeSelection.vue")['default']>
    'LazyNavbar': LazyComponent<typeof import("../components/Navbar.vue")['default']>
    'LazyTextAreaField': LazyComponent<typeof import("../components/TextAreaField.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const CheckboxField: typeof import("../components/CheckboxField.vue")['default']
export const DropdownField: typeof import("../components/DropdownField.vue")['default']
export const FormField: typeof import("../components/FormField.vue")['default']
export const MediaTypesAnimationForm: typeof import("../components/MediaTypes/AnimationForm.vue")['default']
export const MediaTypesConsultationForm: typeof import("../components/MediaTypes/ConsultationForm.vue")['default']
export const MediaTypesDIYForm: typeof import("../components/MediaTypes/DIYForm.vue")['default']
export const MediaTypesDVDRipForm: typeof import("../components/MediaTypes/DVDRipForm.vue")['default']
export const MediaTypesGlossaryForm: typeof import("../components/MediaTypes/GlossaryForm.vue")['default']
export const MediaTypesGraphicsForm: typeof import("../components/MediaTypes/GraphicsForm.vue")['default']
export const MediaTypesH5PForm: typeof import("../components/MediaTypes/H5PForm.vue")['default']
export const MediaTypesLectureForm: typeof import("../components/MediaTypes/LectureForm.vue")['default']
export const MediaTypesOneTermDevelopmentForm: typeof import("../components/MediaTypes/OneTermDevelopmentForm.vue")['default']
export const MediaTypesSupportForm: typeof import("../components/MediaTypes/SupportForm.vue")['default']
export const MediaTypesTimelineForm: typeof import("../components/MediaTypes/TimelineForm.vue")['default']
export const MediaTypesVideoForm: typeof import("../components/MediaTypes/VideoForm.vue")['default']
export const MediaTypesWebForm: typeof import("../components/MediaTypes/WebForm.vue")['default']
export const MultimediaTypeSelection: typeof import("../components/MultimediaTypeSelection.vue")['default']
export const Navbar: typeof import("../components/Navbar.vue")['default']
export const TextAreaField: typeof import("../components/TextAreaField.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyCheckboxField: LazyComponent<typeof import("../components/CheckboxField.vue")['default']>
export const LazyDropdownField: LazyComponent<typeof import("../components/DropdownField.vue")['default']>
export const LazyFormField: LazyComponent<typeof import("../components/FormField.vue")['default']>
export const LazyMediaTypesAnimationForm: LazyComponent<typeof import("../components/MediaTypes/AnimationForm.vue")['default']>
export const LazyMediaTypesConsultationForm: LazyComponent<typeof import("../components/MediaTypes/ConsultationForm.vue")['default']>
export const LazyMediaTypesDIYForm: LazyComponent<typeof import("../components/MediaTypes/DIYForm.vue")['default']>
export const LazyMediaTypesDVDRipForm: LazyComponent<typeof import("../components/MediaTypes/DVDRipForm.vue")['default']>
export const LazyMediaTypesGlossaryForm: LazyComponent<typeof import("../components/MediaTypes/GlossaryForm.vue")['default']>
export const LazyMediaTypesGraphicsForm: LazyComponent<typeof import("../components/MediaTypes/GraphicsForm.vue")['default']>
export const LazyMediaTypesH5PForm: LazyComponent<typeof import("../components/MediaTypes/H5PForm.vue")['default']>
export const LazyMediaTypesLectureForm: LazyComponent<typeof import("../components/MediaTypes/LectureForm.vue")['default']>
export const LazyMediaTypesOneTermDevelopmentForm: LazyComponent<typeof import("../components/MediaTypes/OneTermDevelopmentForm.vue")['default']>
export const LazyMediaTypesSupportForm: LazyComponent<typeof import("../components/MediaTypes/SupportForm.vue")['default']>
export const LazyMediaTypesTimelineForm: LazyComponent<typeof import("../components/MediaTypes/TimelineForm.vue")['default']>
export const LazyMediaTypesVideoForm: LazyComponent<typeof import("../components/MediaTypes/VideoForm.vue")['default']>
export const LazyMediaTypesWebForm: LazyComponent<typeof import("../components/MediaTypes/WebForm.vue")['default']>
export const LazyMultimediaTypeSelection: LazyComponent<typeof import("../components/MultimediaTypeSelection.vue")['default']>
export const LazyNavbar: LazyComponent<typeof import("../components/Navbar.vue")['default']>
export const LazyTextAreaField: LazyComponent<typeof import("../components/TextAreaField.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
