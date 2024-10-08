import { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .schemaType('homePage')
                .title('Home Page')
                .child(
                  S.document()
                    .schemaType('homePage')
                    .documentId('homePage')
                    .title('Home Page'),
                ),
              S.listItem()
                .schemaType('privacyPolicyPage')
                .title('Privacy Policy Page')
                .child(
                  S.document()
                    .schemaType('privacyPolicyPage')
                    .documentId('privacyPolicyPage')
                    .title('Privacy Policy Page'),
                ),
            ]),
        ),
      S.divider(),

      S.listItem()
        .title('Tours')
        .child(
          S.documentTypeList('tour')
            .title('Tours')
            .defaultOrdering([{ field: 'order', direction: 'asc' }]),
        ),

      S.divider(),

      S.documentTypeListItem('testimonial').title('Testimonials'),

      S.divider(),

      S.listItem()
        .schemaType('settings')
        .title('Settings')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
            .title('Settings'),
        ),

      S.listItem()
        .schemaType('footer')
        .title('Footer')
        .child(
          S.document()
            .schemaType('footer')
            .documentId('footer')
            .title('Footer'),
        ),

      // S.listItem()
      //   .schemaType('header')
      //   .title('Header')
      //   .child(S.document().schemaType('header').documentId('header').title('Header')),
      //
      // S.listItem()
      //   .schemaType('footer')
      //   .title('Footer')
      //   .child(S.document().schemaType('footer').documentId('footer').title('Footer')),

      // Settings
      // S.divider(),
      // S.listItem()
      //   .title('Settings')
      //   .child(
      //     S.list()
      //       .title('Settings')
      //       .items([
      //         S.listItem()
      //           .schemaType('settings')
      //           .title('Settings')
      //           .child(
      //             S.document().schemaType('settings').documentId('settings').title('Settings'),
      //           ),
      //
      //         S.listItem()
      //           .schemaType('seo')
      //           .title('SEO')
      //           .child(S.document().schemaType('seo').documentId('seo').title('SEO')),
      //
      //         S.listItem()
      //           .schemaType('socials')
      //           .title('Socials')
      //           .child(S.document().schemaType('socials').documentId('socials').title('Socials')),
      //
      //         S.listItem()
      //           .schemaType('redirects')
      //           .title('Redirects')
      //           .child(
      //             S.document().schemaType('redirects').documentId('redirects').title('Redirects'),
      //           ),
      //       ]),
      //   ),
    ])
