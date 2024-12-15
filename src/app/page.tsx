"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, LetterFx, Arrow } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	const links = [
		{
			href: "http://explorer.coco-node.com",
			title: "Explorer",
			description: " ",
		},
		{
			href: "http://www.coco-node.com/",
			title: "Services",
			description: " ",
		},
		{
			href: "http://www.coco-node.com/",
			title: "Introductions",
			description: " ",
		},
	];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			
			{/* Sosyal medya butonları en üste taşındı */}
			<Flex
				as="header"
				fillWidth
				justifyContent="flex-end"
				paddingX="l"
				paddingY="s"
				gap="12">
				<Button
					href="https://github.com/nikolorenzoo"
					prefixIcon="github" size="l" variant="tertiary">
					GitHub
				</Button>
				<Button
					href="https://x.com/Coskungurcayy"
					prefixIcon="twitter" size="l" variant="tertiary">
					Twitter
				</Button>
				<Button
					href="https://www.t.me/nikolorenzo"
					prefixIcon="telegram" size="l" variant="tertiary">
					Telegram
				</Button>
			</Flex>

			<Flex
  position="relative"
  as="section"
  overflow="hidden"
  fillWidth
  minHeight="0"
  maxWidth={68}
  direction="row"  // Logo ve yazıyı yan yana hizalamak için
  alignItems="center"  // Dikeyde ortalamak için
  justifyContent="center"  // Yatayda ortalamak için
  flex={1}
>
  <Flex
    as="main"
    direction="row"  // Logo ve yazıyı aynı satırda hizalamak için
    justifyContent="center"
    alignItems="center"  // Her iki öğeyi dikeyde ortalamak için
    fillWidth
    fillHeight
    padding="l"
    gap="l"
  >
    {/* Logo */}
    <Flex
      position="relative"
      flex={2}
      paddingTop="56"
      paddingX="xl"
      alignItems="center"
      justifyContent="center"
      style={{ height: 'auto' }}
    >
      <img
        src="/coconode.png"  // Logo yolu
        alt="My Logo"
        style={{ width: '400px', height: 'auto' }}  // Boyutlandırma yapabilirsiniz
      />
    </Flex>

    {/* Yazı */}
    <Flex
      position="relative"
      flex={4}
      gap="24"
      marginBottom="104"
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{
        display: 'flex',
        alignItems: 'center',  // Yazıyı yatayda ortala
        justifyContent: 'center',  // Yazıyı dikeyde ortala
        height: 'auto',  // Yüksekliği ayarladık
      }}
    >
      <Heading
        wrap="balance"
        variant="display-strong-xs"
        style={{
          textAlign: 'center',  // Yazıyı ortalamak için
          margin: 0,  // Başlık için ekstra boşlukları engelle
        }}
      >
        <span className="font-code">
          <LetterFx trigger="instant">
            The crypto world is an ecosystem that combines financial freedom and digital innovation with decentralization
          </LetterFx>
        </span>
      </Heading>
    </Flex>
  </Flex>
</Flex>


			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">				
			</Flex>
		</Flex>
	);
}
