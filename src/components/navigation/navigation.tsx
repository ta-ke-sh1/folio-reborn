import {Group, Stack, Text, useMantineColorScheme} from "@mantine/core";
import {useLanguageState} from "../../hooks/useLanguage.ts";
import { Switch, useMantineTheme, rem } from '@mantine/core';
import {IconMoonStars, IconSun} from "@tabler/icons-react";
import {Language, system_language_en, system_language_vi} from "../../language/languages.tsx";
import {useEffect, useState} from "react";
import moment from 'moment';

export default function NavigationBar() {

    const { toggleColorScheme } = useMantineColorScheme();
    const { language, setLanguage, setLanguageSource } = useLanguageState();

    const theme = useMantineTheme();

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 60000); // Update every 1 minute

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

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

    const viLang = (
        <Text style={{ fontSize: '12px' }}>VI</Text>
    )

    const enLang = (
        <Text style={{ fontSize: '12px' }}>EN</Text>
    )

    const toggleLanguage = () => {
        if(language === Language.VI){
            setLanguage(Language.EN)
            setLanguageSource(system_language_en)
        } else {
            setLanguage(Language.VI)
            setLanguageSource(system_language_vi)
        }
    }

    return (
        <Group className={"nav-bar"} justify={"space-between"} p={"md"}>
            <Text></Text>
            <Group align={"top"}>
                <Stack mr={"xl"} align={"end"}>
                    <Text size={"sm"}>
                        Hanoi, Vietnam
                    </Text>
                    <Text size={"sm"}>
                        {moment(time).format('hh:mm A')}
                    </Text>
                </Stack>
                <Stack>
                    <Switch onClick={toggleLanguage} label={"Language"} checked={language === Language.VI} offLabel={enLang} onLabel={viLang} color="dark.4" />
                    <Switch onClick={toggleColorScheme} label={"Color Mode"} onLabel={sunIcon} offLabel={moonIcon} color="dark.4" />
                </Stack>
            </Group>
        </Group>
    )
}