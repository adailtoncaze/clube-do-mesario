"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Categories from './Categories'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const menuItems = [
        { name: 'Destaques', href: '#destaques' },
        { name: 'Sobre o projeto', href: '#about' },
        { name: 'Empresas parceiras', href: '#parceiros' },
        { name: 'Benefícios', href: '#beneficios' },
    ]

    return (
        <header className="bg-white shadow-sm">
            {/* Top Menu */}
            <div className="bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end h-10">
                        {/* Desktop Menu */}
                        <nav className="hidden md:flex items-center gap-6">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-white text-sm hover:text-white/80 font-medium transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>

                        {/* Mobile Menu Button - Only show after mounted */}
                        {isMounted && (
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden text-white p-2"
                                aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                    />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Only show after mounted */}
            {isMounted && isMenuOpen && (
                <div className="md:hidden bg-primary border-t border-white/10">
                    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block py-2 text-white hover:text-white/80 text-sm font-medium transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}

            {/* Main Header */}
            <div className="border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center">
                            <Image
                                src="/images/logo-clube-mesario.png"
                                alt='Logo do Clube do Mesário'
                                width={133}
                                height={89}
                                priority
                            />
                        </div>

                        <div className="flex-1 w-full md:max-w-2xl md:mx-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="O que você procura hoje?"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                                />
                                <button
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                    aria-label="Buscar"
                                >
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <button className="w-full md:w-auto bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                            Cadastre-se
                        </button>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <Categories />
        </header>
    )
} 