import {
    Divider,
    Group,
    rem,
    Switch,
    Text,
    useMantineColorScheme,
    useMantineTheme,
} from "@mantine/core";
import ModuleCard from "../../../components/card/moduleCard";
import { useLanguageState } from "../../../hooks/useLanguage";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import {
    Language,
    system_language_en,
    system_language_vi,
} from "../../../language/languages";
import { LINK_CURSOR_CLASS } from "../../../components/cursor/cursor";

export default function Controls(props: any) {
    const { toggleColorScheme } = useMantineColorScheme();
    const { language, setLanguage, setLanguageSource } = useLanguageState();

    const theme = useMantineTheme();

    const sunIcon = (
        <IconSun
            style={{ width: rem(16), height: rem(16) }}
            stroke={2.5}
            color={theme.colors.yellow[4]}
        />
    );

    const moonIcon = (
        <IconMoonStars
            style={{ width: rem(16), height: rem(16) }}
            stroke={2.5}
            color={theme.colors.yellow[6]}
        />
    );

    const viLang = <Text style={{ fontSize: "12px" }}>VI</Text>;

    const enLang = <Text style={{ fontSize: "12px" }}>EN</Text>;

    const fontSize = "12px";

    const toggleLanguage = () => {
        if (language === Language.VI) {
            setLanguage(Language.EN);
            setLanguageSource(system_language_en);
        } else {
            setLanguage(Language.VI);
            setLanguageSource(system_language_vi);
        }
    };

    return (
        <ModuleCard style={{ width: props.width ?? "150px", ...props.style }}>
            <Group>
                <Text
                    pt={5}
                    pb={2}
                    pl="xs"
                    pr="xs"
                    style={{ fontSize: "14px" }}>
                    C0NTR0LS
                </Text>
            </Group>

            <Divider m={0} />
            <Group justify="space-between" pl="xs" pr="xs" m={0} align="center">
                <Text
                    pt={5}
                    style={{ fontSize: fontSize, fontFamily: "geist-regular" }}>
                    Language:
                </Text>
                <Switch
                    className={`${LINK_CURSOR_CLASS}`}
                    size="xs"
                    onClick={toggleLanguage}
                    checked={language === Language.VI}
                    offLabel={enLang}
                    onLabel={viLang}
                    color="dark.4"
                />
            </Group>
            <Group
                justify="space-between"
                pl="xs"
                pr="xs"
                pb="xs"
                m={0}
                align="center">
                <Text
                    pt={5}
                    style={{ fontSize: fontSize, fontFamily: "geist-regular" }}>
                    Color Mode:
                </Text>
                <Switch
                    className={`${LINK_CURSOR_CLASS}`}
                    size="xs"
                    onClick={toggleColorScheme}
                    onLabel={sunIcon}
                    offLabel={moonIcon}
                    color="dark.4"
                />
            </Group>
        </ModuleCard>
    );
}
