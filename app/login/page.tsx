'use client';

import { Button } from '@/components/ui/button';
import React from 'react';

function LoginPage() {
  return (
    <div className="min-h-screen w-full flex">
      {/* Left image section */}
      <div className="hidden lg:block w-[40%] relative">
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/c4/ed/c9/c4edc9dec1e69a7c90d15ab440d59dd1.jpg')] bg-cover bg-no-repeat bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-end p-10">
          <h1 className="text-white text-4xl font-bold leading-tight">
            Fix your workflow.<br />Ship faster.
          </h1>
        </div>
      </div>

      {/* Right form section */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="bg-card/80 backdrop-blur-xl border border-border rounded-3xl shadow-xl p-10 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-4xl font-semibold text-foreground">
                Welcome back
              </h2>
              <p className="text-muted-foreground">
                Sign in to continue to <span className="text-primary font-medium">Fixithub</span>
              </p>
            </div>

            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground
                             focus:outline-none focus:ring-2 focus:ring-primary/40
                             transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground
                             focus:outline-none focus:ring-2 focus:ring-primary/40
                             transition"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <Button className="w-full py-6 text-lg rounded-xl">
                Login
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground">
              Don’t have an account?{' '}
              <span className="text-primary font-medium cursor-pointer hover:underline">
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;