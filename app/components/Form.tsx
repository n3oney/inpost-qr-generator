export const Form: React.FC<{
  defaultPhone?: string | null;
  defaultCode?: string | null;
}> = ({ defaultCode, defaultPhone }) => {
  return (
    <form method="get" className="flex flex-col mb-6" action="/code">
      <label htmlFor="phone">
        <h2 className="font-header text-white/90 mb-1">Numer telefonu</h2>
      </label>
      <input
        defaultValue={defaultPhone ?? undefined}
        required
        className="rounded-none border border-slate-600 focus:outline-none ring-inset focus:ring-2 ring-yellow-400 invalid-edited:ring-2 invalid-edited:ring-red-500 bg-gray-700 p-3 placeholder:text-white/50"
        maxLength={9}
        type="tel"
        pattern="[0-9]{9}"
        name="phone"
        id="phone"
        placeholder="Wpisz numer telefonu"
      />
      <label
        htmlFor="phone"
        className="text-sm font-medium mt-1 text-white/75 mb-3"
      >
        Format: 123456789
      </label>
      <label htmlFor="code">
        <h2 className="font-header text-white/90 mb-1">Kod odbioru</h2>
      </label>
      <input
        defaultValue={defaultCode ?? undefined}
        required
        className="rounded-none border border-slate-600 focus:outline-none ring-inset focus:ring-2 ring-yellow-400 invalid-edited:ring-2 invalid-edited:ring-red-500 bg-gray-700 p-3 placeholder:text-white/50"
        type="tel"
        maxLength={6}
        pattern="[0-9]{6}"
        name="code"
        id="code"
        placeholder="Wpisz kod odbioru"
      />
      <input
        className="rounded-none bg-yellow-400 text-gray-900 font-semibold p-3 mt-3"
        type="submit"
        value="Wygeneruj"
      />
    </form>
  );
};
