import React from 'react';
import { ClipboardList, Table as TableIcon } from 'lucide-react';

export function Section({ id, title, icon: Icon, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 md:px-7 md:py-5 border-b border-amber-100 bg-gradient-to-r from-amber-50/60 to-stone-50 flex items-center gap-3">
          {Icon && (
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200 text-amber-800 shadow-sm">
              <Icon size={18} />
            </span>
          )}
          <h3 className="text-lg md:text-xl font-extrabold text-stone-900">{title}</h3>
        </div>
        <div className="px-5 py-5 md:px-7 md:py-6">
          <div className="space-y-4 text-stone-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function DataTable({ title, children }) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      <div className="px-5 py-4 md:px-7 md:py-5 border-b border-amber-100 bg-gradient-to-r from-amber-50/40 to-stone-50 flex items-center gap-2">
        <TableIcon size={16} className="text-amber-700" />
        <h4 className="font-bold text-stone-900">{title}</h4>
      </div>
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}

export function Callout({ title, children }) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-stone-50/50 p-5">
      <div className="flex items-start gap-3">
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-amber-200 text-amber-800 shadow-sm shrink-0">
          <ClipboardList size={18} />
        </span>
        <div className="min-w-0">
          <div className="font-bold text-stone-900">{title}</div>
          <div className="mt-2 text-sm text-stone-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
