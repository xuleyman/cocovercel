<Flex
  position="relative"
  as="section"
  overflow="hidden"
  fillWidth
  minHeight="0"
  maxWidth={68}
  direction="column"
  alignItems="center"
  flex={1}
>
  <Flex
    as="main"
    direction="column"
    justifyContent="center"
    fillWidth
    fillHeight
    padding="l"
    gap="l"
  >
    <Flex
      mobileDirection="column"
      fillWidth
      gap="24"
      alignItems="center"  // Ortalamak için ekledik
    >
      <Flex
        position="relative"
        flex={2}
        paddingTop="56"
        paddingX="xl"
        alignItems="center"  // Resmi ve yazıyı ortalamak için
        justifyContent="center"  // Resmi dikeyde ortalamak için
      >
        <img
          src="/coconode.png"  // public klasöründeki logo yolu
          alt="My Logo"
          style={{ width: '400px', height: 'auto', position: 'absolute', top: 0 }}  // Görselin üst hizasını sıfırladık
        />
      </Flex>

      <Flex
        position="relative"
        flex={4}
        gap="24"
        marginBottom="104"
        direction="column"
        alignItems="center"  // Yazıyı da ortalamak için ekledik
      >
        <Heading
          wrap="balance"
          variant="display-strong-xs"
          style={{ textAlign: 'center', position: 'absolute', top: 0 }}  // Yazıyı da üst hizaya göre yerleştirdik
        >
          <span className="font-code">
            <LetterFx trigger="instant">
              The crypto world is an ecosystem that combines financial freedom and digital innovation with decentralization
            </LetterFx>
          </span>
        </Heading>
      </Flex>
    </Flex>

    <Grid
      radius="l"
      border="neutral-medium"
      borderStyle="solid-1"
      columns="repeat(3, 1fr)"
      tabletColumns="1col"
      mobileColumns="1col"
      fillWidth
    >
      {links.map((link) => (
        <Link
          target="_blank"
          style={{ padding: 'var(--responsive-space-l)' }}
          key={link.href}
          href={link.href}
        >
          <Flex fillWidth paddingY="8" gap="8" direction="column">
            <Flex fillWidth gap="12" alignItems="center">
              <Text variant="body-strong-m" onBackground="neutral-strong">
                {link.title}
              </Text>
              <Icon size="s" name="arrowUpRight" />
            </Flex>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {link.description}
            </Text>
          </Flex>
        </Link>
      ))}
    </Grid>
  </Flex>
</Flex>
