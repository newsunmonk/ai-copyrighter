export default function LoadingSpinner() {
  return (
    <div className="flex min-h-[240px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03]">
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-2 border-purple-400/20" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-purple-400 border-r-purple-300" />
      </div>
      <p className="mt-5 text-sm text-slate-300">Claude가 카피를 정교하게 생성하는 중입니다...</p>
    </div>
  );
}
