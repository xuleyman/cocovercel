<Flex
  mobileDirection="column"
  fillWidth
  gap="24"
  alignItems="center"
  justifyContent="center" // Dikey ortalama için eklendi
>
  {/* Sol taraftaki görsel */}
  <Flex
    position="relative"
    flex={2}
    paddingTop="56"
    paddingX="xl"
    alignItems="center"
    justifyContent="center"
  >
    <img
      src="/coconode.png" // public klasöründeki logo yolu
      alt="My Logo"
      style={{ width: '400px', height: 'auto' }} // Boyutlandırma yapabilirsiniz
    />
  </Flex>

  {/* Sağ taraftaki yazı */}
  <Flex
    position="relative"
    flex={4}
    gap="24"
    marginBottom="104"
    direction="column"
    alignItems="center"
    justifyContent="center" // Yazıyı da dikey ortalamak için
  >
    <Heading
      wrap="balance"
      variant="display-strong-xs"
      style={{ textAlign: 'center' }} // Yazının ortalanması için
    >
      <span className="font-code">
        <LetterFx trigger="instant">
          The crypto world is an ecosystem that combines financial freedom and digital innovation with decentralization
        </LetterFx>
      </span>
    </Heading>
  </Flex>
</Flex>
