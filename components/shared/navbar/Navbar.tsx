"use client";
import { useState, useEffect } from "react";
import {
  Container,
  Group,
  Burger,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantine/ds";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { link: "/", label: "Home" },
  { link: "/project/1", label: "Project" },
];
const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const pathname = usePathname();

  const { toggleColorScheme } = useMantineColorScheme();

  const items = links.map((link) => {
    const isActive =
      (pathname.includes(link.link) && link.link.length > 1) ||
      pathname === link.link;
    return (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link}
        data-active={isActive || undefined}
        onClick={() => {
          setActive(link.link);
        }}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <MantineLogo size={28} />
        <Group gap={5} visibleFrom="xs">
          {items}
          <ActionIcon
            onClick={() => toggleColorScheme()}
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
          >
            <IconMoon className={classes.moon} stroke={1.5} />
            <IconSun className={classes.sun} stroke={1.5} />
          </ActionIcon>
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};

export default Navbar;
