'use client';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import nav from '@/data/nav.json';

export default function Themes() {
  return <NavLegacy pages={nav.pages} />;
}
