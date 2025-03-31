
// Projekt: apex-vip-site
// Verkaufsseite für deinen Telegram Signal-Bot mit Stripe-Zahlung

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BadgeCheck, Bot, DollarSign } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-green-400">
        Apex VIP Signale
      </h1>
      <p className="text-center max-w-xl mb-6 text-lg">
        Profitiere von unserem profitablen Trading-Bot mit <span className="text-green-400 font-semibold">93% Trefferquote</span>!
        Erhalte VIP Zugang zu exklusiven Signalen für dein Apex Konto.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <Card className="bg-zinc-900 p-4">
          <CardContent className="flex flex-col gap-3 items-center">
            <BadgeCheck className="w-8 h-8 text-green-400"/>
            <h2 className="text-xl font-semibold">Monatlich zahlen</h2>
            <p className="text-center">Zahle monatlich und nutze alle Signale in Echtzeit</p>
            <Link href="https://buy.stripe.com/test_5kA3dagm1h1E3CgcMN" target="_blank">
              <Button className="w-full">Jetzt abonnieren - 39 €/Monat</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 p-4">
          <CardContent className="flex flex-col gap-3 items-center">
            <DollarSign className="w-8 h-8 text-yellow-400"/>
            <h2 className="text-xl font-semibold">Lifetime Zugang</h2>
            <p className="text-center">Einmal zahlen, für immer Zugriff auf alle VIP Signale!</p>
            <Link href="https://buy.stripe.com/test_aEU4he6Lr8v8b4I4gg" target="_blank">
              <Button className="w-full">Lifetime kaufen – 199 €</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <p className="text-sm text-muted-foreground">
        Nach Kauf erhältst du den sofortigen Zugang zum Telegram Bot 🎯
      </p>
    </main>
  )
}
