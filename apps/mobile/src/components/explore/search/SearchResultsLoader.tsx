import React from 'react'
import { useTranslation } from 'react-i18next'
import { FadeIn, FadeOut } from 'react-native-reanimated'
import { SectionHeaderText } from 'src/components/explore/search/SearchSectionHeader'
import { AnimatedFlex, Flex, Icons, Loader } from 'ui/src'

export const SearchResultsLoader = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Flex gap="$spacing16">
      <Flex gap="$spacing12">
        <SectionHeaderText
          icon={<Icons.Coin color="$neutral2" size="$icon.24" />}
          title={t('explore.search.section.tokens')}
        />
        <AnimatedFlex entering={FadeIn} exiting={FadeOut} mx="$spacing8">
          <Loader.Token repeat={2} />
        </AnimatedFlex>
      </Flex>
      <Flex gap="$spacing12">
        <SectionHeaderText
          icon={<Icons.Gallery color="$neutral2" size="$icon.24" />}
          title={t('explore.search.section.nft')}
        />
        <AnimatedFlex entering={FadeIn} exiting={FadeOut} mx="$spacing8">
          <Loader.Token repeat={2} />
        </AnimatedFlex>
      </Flex>
      <Flex gap="$spacing12">
        <SectionHeaderText
          icon={<Icons.Person color="$neutral2" size="$icon.24" />}
          title={t('explore.search.section.wallets')}
        />
        <AnimatedFlex entering={FadeIn} exiting={FadeOut} mx="$spacing8">
          <Loader.Token />
        </AnimatedFlex>
      </Flex>
    </Flex>
  )
}
