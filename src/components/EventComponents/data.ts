interface Events {
  id: number;
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
}
const initialEvents: Events[] = [
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/6c81/60ca/56f3eab7abd619c6f43ad594be3b865a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JOng4YkyZqzJCvVMd~NiN9EHlqosMoVm8lkj36GsMEmdhnHI1DwawIWE3PZo0rSd35KmHf0RuNuUCVWlw8Dx2I~IHeAQdqWv6ZM7hVuCzoytxbQLXwRnms6bPHWMFCs3mKmBW1ZMC9XmzzObr-q4us5MK2Y8AH1HLwVI1OriQB9blZHeyQajvZV8vwV~jwiPprV~u6iWX1DIlN8mx9JKgmYXf02ai8SByaWAIMMF6Y56ZhCTIrBM6Kjdv6eylA4yy34v~MFaSC1y~4ODygpTs5BfCWftalg5P60NSbifHeuPnr3Z3r0GjBMCq~~OM4pNKdMZy80cyWFaCBdr3yx6bg__",
    title: "Art Exhibition",
    date: "2024-12-01",
    location: "Pristina, Kosovo",
    description: "Showcasing contemporary artists.",
  },
  {
    id: 2,
    image:
      "https://s3-alpha-sig.figma.com/img/b777/45fc/7ab44e28ec6b6b7d439e38e80a38b865?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oFAPczWW9SBHtTmxaBnTd2spsVnhIvq~7RvDl6NwqhgUu~8vbxgXWi4WHHnxHnVqp6BWAJOvRZeYDp-ZRSgo7E1lXute71HyM0pIfBkUhYifFo69LGXgHD22AT~vIAMdmzg~kH0Ud1eNBN98t-Nqc9Mg0ORsxCLWWZiiHM1dIJ2EeodLomx2etbSwtkiwMdYnxFh9r0idtW3cE~eoING01Xi4woOl9Dm14enqQk3VWVo-77pR6nLKoIc1gzjEovRqgfctrGmoB7bABbORp~PEg9uoJ4jZ4bdRKrJ1IoiRO7Ifmuk6j5Z6q8X3NLekAMrX5QCLoF~HABUP8mIFUJQIA__",
    title: "Tech Conference",
    date: "2024-12-02",
    location: "Pec, Kosovo",
    description: "Exploring new AI innovations.",
  },
  {
    id: 3,
    image:
      "https://s3-alpha-sig.figma.com/img/e25b/5721/cd37ad758215549b8fc84d0e06732f2a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aLyxGpK39829~zePxfQkfZ4~hNasCaJWBjKyp8wUS8SeZKiaQ02Tpm4w8vLpiSOFT8Oi9oji7g2INX6R75GGsA3z9ZC0Ula8YrWV1VUFoSmigBjEpWPlnXtJ5vyIon12TuBCyDQbxub-44mTl~~N9tbdT6ieWVZWWcpzWQK915e5W6xRlpAbOIaOJ-p-GQHjthx61TFiJzRDPbgtWSAto13x~jIe~f4GMc8UGxpBXW2i1eHontbhWueNZajVVG7VkJtOBrIiVBLXNCp4NuFga8Ek5DZMM3d-hhqAudjEBNLSPGw~M~4Bdz6~Qmt5Y2kBoAuiFJk6Orcz~UPEUhbssQ__",
    title: "Cooking Class",
    date: "2024-12-03",
    location: "Gjakova, Kosovo",
    description: "Learn Kosovar traditional dishes.",
  },
  {
    id: 4,
    image:
      "https://s3-alpha-sig.figma.com/img/b777/45fc/7ab44e28ec6b6b7d439e38e80a38b865?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oFAPczWW9SBHtTmxaBnTd2spsVnhIvq~7RvDl6NwqhgUu~8vbxgXWi4WHHnxHnVqp6BWAJOvRZeYDp-ZRSgo7E1lXute71HyM0pIfBkUhYifFo69LGXgHD22AT~vIAMdmzg~kH0Ud1eNBN98t-Nqc9Mg0ORsxCLWWZiiHM1dIJ2EeodLomx2etbSwtkiwMdYnxFh9r0idtW3cE~eoING01Xi4woOl9Dm14enqQk3VWVo-77pR6nLKoIc1gzjEovRqgfctrGmoB7bABbORp~PEg9uoJ4jZ4bdRKrJ1IoiRO7Ifmuk6j5Z6q8X3NLekAMrX5QCLoF~HABUP8mIFUJQIA__",
    title: "Yoga Retreat",
    date: "2024-12-04",
    location: "Pristina, Kosovo",
    description: "Relax and rejuvenate.",
  },
  {
    id: 5,
    image:
      "https://s3-alpha-sig.figma.com/img/6c81/60ca/56f3eab7abd619c6f43ad594be3b865a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JOng4YkyZqzJCvVMd~NiN9EHlqosMoVm8lkj36GsMEmdhnHI1DwawIWE3PZo0rSd35KmHf0RuNuUCVWlw8Dx2I~IHeAQdqWv6ZM7hVuCzoytxbQLXwRnms6bPHWMFCs3mKmBW1ZMC9XmzzObr-q4us5MK2Y8AH1HLwVI1OriQB9blZHeyQajvZV8vwV~jwiPprV~u6iWX1DIlN8mx9JKgmYXf02ai8SByaWAIMMF6Y56ZhCTIrBM6Kjdv6eylA4yy34v~MFaSC1y~4ODygpTs5BfCWftalg5P60NSbifHeuPnr3Z3r0GjBMCq~~OM4pNKdMZy80cyWFaCBdr3yx6bg__",
    title: "Startup Pitch Night",
    date: "2024-12-05",
    location: "Mitrovica, Kosovo",
    description: "Startups showcase their ideas.",
  },
  {
    id: 6,
    image:
      "https://s3-alpha-sig.figma.com/img/b777/45fc/7ab44e28ec6b6b7d439e38e80a38b865?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oFAPczWW9SBHtTmxaBnTd2spsVnhIvq~7RvDl6NwqhgUu~8vbxgXWi4WHHnxHnVqp6BWAJOvRZeYDp-ZRSgo7E1lXute71HyM0pIfBkUhYifFo69LGXgHD22AT~vIAMdmzg~kH0Ud1eNBN98t-Nqc9Mg0ORsxCLWWZiiHM1dIJ2EeodLomx2etbSwtkiwMdYnxFh9r0idtW3cE~eoING01Xi4woOl9Dm14enqQk3VWVo-77pR6nLKoIc1gzjEovRqgfctrGmoB7bABbORp~PEg9uoJ4jZ4bdRKrJ1IoiRO7Ifmuk6j5Z6q8X3NLekAMrX5QCLoF~HABUP8mIFUJQIA__",
    title: "Music Festival",
    date: "2024-12-06",
    location: "Pristina, Kosovo",
    description: "Experience diverse music genres.",
  },
  {
    id: 7,
    image:
      "https://s3-alpha-sig.figma.com/img/e25b/5721/cd37ad758215549b8fc84d0e06732f2a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aLyxGpK39829~zePxfQkfZ4~hNasCaJWBjKyp8wUS8SeZKiaQ02Tpm4w8vLpiSOFT8Oi9oji7g2INX6R75GGsA3z9ZC0Ula8YrWV1VUFoSmigBjEpWPlnXtJ5vyIon12TuBCyDQbxub-44mTl~~N9tbdT6ieWVZWWcpzWQK915e5W6xRlpAbOIaOJ-p-GQHjthx61TFiJzRDPbgtWSAto13x~jIe~f4GMc8UGxpBXW2i1eHontbhWueNZajVVG7VkJtOBrIiVBLXNCp4NuFga8Ek5DZMM3d-hhqAudjEBNLSPGw~M~4Bdz6~Qmt5Y2kBoAuiFJk6Orcz~UPEUhbssQ__",
    title: "Film Screening",
    date: "2024-12-07",
    location: "Ferizaj, Kosovo",
    description: "Watch independent films.",
  },
  {
    id: 8,
    image:
      "https://s3-alpha-sig.figma.com/img/b777/45fc/7ab44e28ec6b6b7d439e38e80a38b865?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oFAPczWW9SBHtTmxaBnTd2spsVnhIvq~7RvDl6NwqhgUu~8vbxgXWi4WHHnxHnVqp6BWAJOvRZeYDp-ZRSgo7E1lXute71HyM0pIfBkUhYifFo69LGXgHD22AT~vIAMdmzg~kH0Ud1eNBN98t-Nqc9Mg0ORsxCLWWZiiHM1dIJ2EeodLomx2etbSwtkiwMdYnxFh9r0idtW3cE~eoING01Xi4woOl9Dm14enqQk3VWVo-77pR6nLKoIc1gzjEovRqgfctrGmoB7bABbORp~PEg9uoJ4jZ4bdRKrJ1IoiRO7Ifmuk6j5Z6q8X3NLekAMrX5QCLoF~HABUP8mIFUJQIA__",
    title: "Photography Workshop",
    date: "2024-12-08",
    location: "Pristina, Kosovo",
    description: "Master photography skills.",
  },
  {
    id: 9,
    image:
      "https://s3-alpha-sig.figma.com/img/6c81/60ca/56f3eab7abd619c6f43ad594be3b865a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JOng4YkyZqzJCvVMd~NiN9EHlqosMoVm8lkj36GsMEmdhnHI1DwawIWE3PZo0rSd35KmHf0RuNuUCVWlw8Dx2I~IHeAQdqWv6ZM7hVuCzoytxbQLXwRnms6bPHWMFCs3mKmBW1ZMC9XmzzObr-q4us5MK2Y8AH1HLwVI1OriQB9blZHeyQajvZV8vwV~jwiPprV~u6iWX1DIlN8mx9JKgmYXf02ai8SByaWAIMMF6Y56ZhCTIrBM6Kjdv6eylA4yy34v~MFaSC1y~4ODygpTs5BfCWftalg5P60NSbifHeuPnr3Z3r0GjBMCq~~OM4pNKdMZy80cyWFaCBdr3yx6bg__",
    title: "Book Fair",
    date: "2024-12-09",
    location: "Gjilan, Kosovo",
    description: "Discover a variety of books.",
  },
  {
    id: 10,
    image:
      "https://s3-alpha-sig.figma.com/img/b777/45fc/7ab44e28ec6b6b7d439e38e80a38b865?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oFAPczWW9SBHtTmxaBnTd2spsVnhIvq~7RvDl6NwqhgUu~8vbxgXWi4WHHnxHnVqp6BWAJOvRZeYDp-ZRSgo7E1lXute71HyM0pIfBkUhYifFo69LGXgHD22AT~vIAMdmzg~kH0Ud1eNBN98t-Nqc9Mg0ORsxCLWWZiiHM1dIJ2EeodLomx2etbSwtkiwMdYnxFh9r0idtW3cE~eoING01Xi4woOl9Dm14enqQk3VWVo-77pR6nLKoIc1gzjEovRqgfctrGmoB7bABbORp~PEg9uoJ4jZ4bdRKrJ1IoiRO7Ifmuk6j5Z6q8X3NLekAMrX5QCLoF~HABUP8mIFUJQIA__",
    title: "Charity Run",
    date: "2024-12-10",
    location: "Pristina, Kosovo",
    description: "Run for a good cause.",
  },
  {
    id: 11,
    image:
      "https://s3-alpha-sig.figma.com/img/e25b/5721/cd37ad758215549b8fc84d0e06732f2a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aLyxGpK39829~zePxfQkfZ4~hNasCaJWBjKyp8wUS8SeZKiaQ02Tpm4w8vLpiSOFT8Oi9oji7g2INX6R75GGsA3z9ZC0Ula8YrWV1VUFoSmigBjEpWPlnXtJ5vyIon12TuBCyDQbxub-44mTl~~N9tbdT6ieWVZWWcpzWQK915e5W6xRlpAbOIaOJ-p-GQHjthx61TFiJzRDPbgtWSAto13x~jIe~f4GMc8UGxpBXW2i1eHontbhWueNZajVVG7VkJtOBrIiVBLXNCp4NuFga8Ek5DZMM3d-hhqAudjEBNLSPGw~M~4Bdz6~Qmt5Y2kBoAuiFJk6Orcz~UPEUhbssQ__",
    title: "Wine Tasting",
    date: "2024-12-11",
    location: "Rahovec, Kosovo",
    description: "Explore local wines.",
  },
  {
    id: 12,
    image: "https://example.com/image12.jpg",
    title: "Theater Play",
    date: "2024-12-12",
    location: "Pristina, Kosovo",
    description: "Enjoy a captivating play.",
  },
  {
    id: 13,
    image:
      "https://s3-alpha-sig.figma.com/img/6c81/60ca/56f3eab7abd619c6f43ad594be3b865a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JOng4YkyZqzJCvVMd~NiN9EHlqosMoVm8lkj36GsMEmdhnHI1DwawIWE3PZo0rSd35KmHf0RuNuUCVWlw8Dx2I~IHeAQdqWv6ZM7hVuCzoytxbQLXwRnms6bPHWMFCs3mKmBW1ZMC9XmzzObr-q4us5MK2Y8AH1HLwVI1OriQB9blZHeyQajvZV8vwV~jwiPprV~u6iWX1DIlN8mx9JKgmYXf02ai8SByaWAIMMF6Y56ZhCTIrBM6Kjdv6eylA4yy34v~MFaSC1y~4ODygpTs5BfCWftalg5P60NSbifHeuPnr3Z3r0GjBMCq~~OM4pNKdMZy80cyWFaCBdr3yx6bg__",
    title: "Open Mic Night",
    date: "2024-12-13",
    location: "Mitrovica, Kosovo",
    description: "Showcase your talent.",
  },
  {
    id: 14,
    image:
      "https://s3-alpha-sig.figma.com/img/b777/45fc/7ab44e28ec6b6b7d439e38e80a38b865?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oFAPczWW9SBHtTmxaBnTd2spsVnhIvq~7RvDl6NwqhgUu~8vbxgXWi4WHHnxHnVqp6BWAJOvRZeYDp-ZRSgo7E1lXute71HyM0pIfBkUhYifFo69LGXgHD22AT~vIAMdmzg~kH0Ud1eNBN98t-Nqc9Mg0ORsxCLWWZiiHM1dIJ2EeodLomx2etbSwtkiwMdYnxFh9r0idtW3cE~eoING01Xi4woOl9Dm14enqQk3VWVo-77pR6nLKoIc1gzjEovRqgfctrGmoB7bABbORp~PEg9uoJ4jZ4bdRKrJ1IoiRO7Ifmuk6j5Z6q8X3NLekAMrX5QCLoF~HABUP8mIFUJQIA__",
    title: "Dance Workshop",
    date: "2024-12-14",
    location: "Gjakova, Kosovo",
    description: "Learn modern dance moves.",
  },
  {
    id: 15,
    image:
      "https://s3-alpha-sig.figma.com/img/e25b/5721/cd37ad758215549b8fc84d0e06732f2a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aLyxGpK39829~zePxfQkfZ4~hNasCaJWBjKyp8wUS8SeZKiaQ02Tpm4w8vLpiSOFT8Oi9oji7g2INX6R75GGsA3z9ZC0Ula8YrWV1VUFoSmigBjEpWPlnXtJ5vyIon12TuBCyDQbxub-44mTl~~N9tbdT6ieWVZWWcpzWQK915e5W6xRlpAbOIaOJ-p-GQHjthx61TFiJzRDPbgtWSAto13x~jIe~f4GMc8UGxpBXW2i1eHontbhWueNZajVVG7VkJtOBrIiVBLXNCp4NuFga8Ek5DZMM3d-hhqAudjEBNLSPGw~M~4Bdz6~Qmt5Y2kBoAuiFJk6Orcz~UPEUhbssQ__",
    title: "Startup Bootcamp",
    date: "2024-12-15",
    location: "Pristina, Kosovo",
    description: "Intense startup training.",
  },
  {
    id: 16,
    image: "https://example.com/image16.jpg",
    title: "Holiday Market",
    date: "2024-12-16",
    location: "Gjilan, Kosovo",
    description: "Shop for holiday goods.",
  },
  {
    id: 17,
    image:
      "https://s3-alpha-sig.figma.com/img/6c81/60ca/56f3eab7abd619c6f43ad594be3b865a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JOng4YkyZqzJCvVMd~NiN9EHlqosMoVm8lkj36GsMEmdhnHI1DwawIWE3PZo0rSd35KmHf0RuNuUCVWlw8Dx2I~IHeAQdqWv6ZM7hVuCzoytxbQLXwRnms6bPHWMFCs3mKmBW1ZMC9XmzzObr-q4us5MK2Y8AH1HLwVI1OriQB9blZHeyQajvZV8vwV~jwiPprV~u6iWX1DIlN8mx9JKgmYXf02ai8SByaWAIMMF6Y56ZhCTIrBM6Kjdv6eylA4yy34v~MFaSC1y~4ODygpTs5BfCWftalg5P60NSbifHeuPnr3Z3r0GjBMCq~~OM4pNKdMZy80cyWFaCBdr3yx6bg__",
    title: "Science Fair",
    date: "2024-12-17",
    location: "Pristina, Kosovo",
    description: "Innovative scientific projects.",
  },
  {
    id: 18,
    image:
      "https://s3-alpha-sig.figma.com/img/b777/45fc/7ab44e28ec6b6b7d439e38e80a38b865?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oFAPczWW9SBHtTmxaBnTd2spsVnhIvq~7RvDl6NwqhgUu~8vbxgXWi4WHHnxHnVqp6BWAJOvRZeYDp-ZRSgo7E1lXute71HyM0pIfBkUhYifFo69LGXgHD22AT~vIAMdmzg~kH0Ud1eNBN98t-Nqc9Mg0ORsxCLWWZiiHM1dIJ2EeodLomx2etbSwtkiwMdYnxFh9r0idtW3cE~eoING01Xi4woOl9Dm14enqQk3VWVo-77pR6nLKoIc1gzjEovRqgfctrGmoB7bABbORp~PEg9uoJ4jZ4bdRKrJ1IoiRO7Ifmuk6j5Z6q8X3NLekAMrX5QCLoF~HABUP8mIFUJQIA__",
    title: "Poetry Slam",
    date: "2024-12-18",
    location: "Ferizaj, Kosovo",
    description: "Expressive poetry readings.",
  },
  {
    id: 19,
    image:
      "https://s3-alpha-sig.figma.com/img/e25b/5721/cd37ad758215549b8fc84d0e06732f2a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aLyxGpK39829~zePxfQkfZ4~hNasCaJWBjKyp8wUS8SeZKiaQ02Tpm4w8vLpiSOFT8Oi9oji7g2INX6R75GGsA3z9ZC0Ula8YrWV1VUFoSmigBjEpWPlnXtJ5vyIon12TuBCyDQbxub-44mTl~~N9tbdT6ieWVZWWcpzWQK915e5W6xRlpAbOIaOJ-p-GQHjthx61TFiJzRDPbgtWSAto13x~jIe~f4GMc8UGxpBXW2i1eHontbhWueNZajVVG7VkJtOBrIiVBLXNCp4NuFga8Ek5DZMM3d-hhqAudjEBNLSPGw~M~4Bdz6~Qmt5Y2kBoAuiFJk6Orcz~UPEUhbssQ__",
    title: "Fashion Show",
    date: "2024-12-19",
    location: "Pristina, Kosovo",
    description: "Showcasing local designers.",
  },
  {
    id: 20,
    image: "https://example.com/image20.jpg",
    title: "Astronomy Night",
    date: "2024-12-20",
    location: "Mitrovica, Kosovo",
    description: "Explore the cosmos.",
  },
  {
    id: 21,
    image:
      "https://s3-alpha-sig.figma.com/img/6c81/60ca/56f3eab7abd619c6f43ad594be3b865a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JOng4YkyZqzJCvVMd~NiN9EHlqosMoVm8lkj36GsMEmdhnHI1DwawIWE3PZo0rSd35KmHf0RuNuUCVWlw8Dx2I~IHeAQdqWv6ZM7hVuCzoytxbQLXwRnms6bPHWMFCs3mKmBW1ZMC9XmzzObr-q4us5MK2Y8AH1HLwVI1OriQB9blZHeyQajvZV8vwV~jwiPprV~u6iWX1DIlN8mx9JKgmYXf02ai8SByaWAIMMF6Y56ZhCTIrBM6Kjdv6eylA4yy34v~MFaSC1y~4ODygpTs5BfCWftalg5P60NSbifHeuPnr3Z3r0GjBMCq~~OM4pNKdMZy80cyWFaCBdr3yx6bg__",
    title: "Health Seminar",
    date: "2024-12-21",
    location: "Gjakova, Kosovo",
    description: "Insights into healthy living.",
  },
  {
    id: 22,
    image:
      "https://s3-alpha-sig.figma.com/img/b777/45fc/7ab44e28ec6b6b7d439e38e80a38b865?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oFAPczWW9SBHtTmxaBnTd2spsVnhIvq~7RvDl6NwqhgUu~8vbxgXWi4WHHnxHnVqp6BWAJOvRZeYDp-ZRSgo7E1lXute71HyM0pIfBkUhYifFo69LGXgHD22AT~vIAMdmzg~kH0Ud1eNBN98t-Nqc9Mg0ORsxCLWWZiiHM1dIJ2EeodLomx2etbSwtkiwMdYnxFh9r0idtW3cE~eoING01Xi4woOl9Dm14enqQk3VWVo-77pR6nLKoIc1gzjEovRqgfctrGmoB7bABbORp~PEg9uoJ4jZ4bdRKrJ1IoiRO7Ifmuk6j5Z6q8X3NLekAMrX5QCLoF~HABUP8mIFUJQIA__",
    title: "Language Exchange",
    date: "2024-12-22",
    location: "Pristina, Kosovo",
    description: "Practice languages.",
  },
  {
    id: 23,
    image: "https://example.com/image23.jpg",
    title: "Sports Tournament",
    date: "2024-12-23",
    location: "Ferizaj, Kosovo",
    description: "Compete in various sports.",
  },
  {
    id: 24,
    image: "https://example.com/image24.jpg",
    title: "Craft Workshop",
    date: "2024-12-24",
    location: "Gjilan, Kosovo",
    description: "Create unique crafts.",
  },
  {
    id: 25,
    image:
      "https://s3-alpha-sig.figma.com/img/6c81/60ca/56f3eab7abd619c6f43ad594be3b865a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JOng4YkyZqzJCvVMd~NiN9EHlqosMoVm8lkj36GsMEmdhnHI1DwawIWE3PZo0rSd35KmHf0RuNuUCVWlw8Dx2I~IHeAQdqWv6ZM7hVuCzoytxbQLXwRnms6bPHWMFCs3mKmBW1ZMC9XmzzObr-q4us5MK2Y8AH1HLwVI1OriQB9blZHeyQajvZV8vwV~jwiPprV~u6iWX1DIlN8mx9JKgmYXf02ai8SByaWAIMMF6Y56ZhCTIrBM6Kjdv6eylA4yy34v~MFaSC1y~4ODygpTs5BfCWftalg5P60NSbifHeuPnr3Z3r0GjBMCq~~OM4pNKdMZy80cyWFaCBdr3yx6bg__",
    title: "Startup Showcase",
    date: "2024-12-25",
    location: "Pristina, Kosovo",
    description: "See new innovations.",
  },
  {
    id: 26,
    image:
      "https://s3-alpha-sig.figma.com/img/b777/45fc/7ab44e28ec6b6b7d439e38e80a38b865?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oFAPczWW9SBHtTmxaBnTd2spsVnhIvq~7RvDl6NwqhgUu~8vbxgXWi4WHHnxHnVqp6BWAJOvRZeYDp-ZRSgo7E1lXute71HyM0pIfBkUhYifFo69LGXgHD22AT~vIAMdmzg~kH0Ud1eNBN98t-Nqc9Mg0ORsxCLWWZiiHM1dIJ2EeodLomx2etbSwtkiwMdYnxFh9r0idtW3cE~eoING01Xi4woOl9Dm14enqQk3VWVo-77pR6nLKoIc1gzjEovRqgfctrGmoB7bABbORp~PEg9uoJ4jZ4bdRKrJ1IoiRO7Ifmuk6j5Z6q8X3NLekAMrX5QCLoF~HABUP8mIFUJQIA__",
    title: "Local History Tour",
    date: "2024-12-26",
    location: "Rahovec, Kosovo",
    description: "Learn about Kosovo's history.",
  },
  {
    id: 27,
    image: "https://example.com/image27.jpg",
    title: "Live Comedy",
    date: "2024-12-27",
    location: "Mitrovica, Kosovo",
    description: "Laugh with top comedians.",
  },
  {
    id: 28,
    image: "https://example.com/image28.jpg",
    title: "Coding Hackathon",
    date: "2024-12-28",
    location: "Pristina, Kosovo",
    description: "Collaborate on coding projects.",
  },
  {
    id: 29,
    image:
      "https://s3-alpha-sig.figma.com/img/6c81/60ca/56f3eab7abd619c6f43ad594be3b865a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JOng4YkyZqzJCvVMd~NiN9EHlqosMoVm8lkj36GsMEmdhnHI1DwawIWE3PZo0rSd35KmHf0RuNuUCVWlw8Dx2I~IHeAQdqWv6ZM7hVuCzoytxbQLXwRnms6bPHWMFCs3mKmBW1ZMC9XmzzObr-q4us5MK2Y8AH1HLwVI1OriQB9blZHeyQajvZV8vwV~jwiPprV~u6iWX1DIlN8mx9JKgmYXf02ai8SByaWAIMMF6Y56ZhCTIrBM6Kjdv6eylA4yy34v~MFaSC1y~4ODygpTs5BfCWftalg5P60NSbifHeuPnr3Z3r0GjBMCq~~OM4pNKdMZy80cyWFaCBdr3yx6bg__",
    title: "Art Auction",
    date: "2024-12-29",
    location: "Gjilan, Kosovo",
    description: "Bid on unique artworks.",
  },
  {
    id: 30,
    image:
      "https://s3-alpha-sig.figma.com/img/b777/45fc/7ab44e28ec6b6b7d439e38e80a38b865?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oFAPczWW9SBHtTmxaBnTd2spsVnhIvq~7RvDl6NwqhgUu~8vbxgXWi4WHHnxHnVqp6BWAJOvRZeYDp-ZRSgo7E1lXute71HyM0pIfBkUhYifFo69LGXgHD22AT~vIAMdmzg~kH0Ud1eNBN98t-Nqc9Mg0ORsxCLWWZiiHM1dIJ2EeodLomx2etbSwtkiwMdYnxFh9r0idtW3cE~eoING01Xi4woOl9Dm14enqQk3VWVo-77pR6nLKoIc1gzjEovRqgfctrGmoB7bABbORp~PEg9uoJ4jZ4bdRKrJ1IoiRO7Ifmuk6j5Z6q8X3NLekAMrX5QCLoF~HABUP8mIFUJQIA__",
    title: "New Year's Eve Gala",
    date: "2024-12-31",
    location: "Pristina, Kosovo",
    description: "Celebrate in style.",
  },
];

export default initialEvents;
