function InfoCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="bg-[#f4f4f4] rounded-2xl px-4 py-3">
            <p className="text-xs text-gray-500">{label}</p>
            <p className="font-semibold">{value}</p>
        </div>
    );
}
export default InfoCard;