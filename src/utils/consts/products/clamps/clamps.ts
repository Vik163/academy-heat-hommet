import type { Card } from '@/utils/types/cards';
import type { CategoryClamps } from '@/utils/types/catalog';

import { clampsPipes } from './clamps-pipes';
import { clampsSprinkler } from './clamps-sprinkler';
import { clampsStainless } from './clamps-stainless';
import { clampsDrainageSystems } from './clamps-drainage-systems';
import { clampsVentilationSystems } from './clamps-ventilation-systems';
import { clampsSMLSystem } from './clamps-sml-system';

export const clamps: Record<CategoryClamps, Card[]> = {
   'Хомуты трубные': clampsPipes,
   'Хомуты спринклерные': clampsSprinkler,
   'Хомуты из нержавеющей стали': clampsStainless,
   'Хомуты для водосточных систем и дымоходов': clampsDrainageSystems,
   'Хомуты для систем вентиляции': clampsVentilationSystems,
   'Крепеж для SML-систем': clampsSMLSystem,
};
