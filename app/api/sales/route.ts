import { NextResponse } from "next/server";

export type Device = {
  id: string;
  name: string;
  model: string;
  storage: string;
  condition: "S" | "A" | "B" | "C";
  conditionNote: string;
  price: number;
  sold: boolean;
  imageUrl: string | null;
};

// Airtable から販売端末データを取得する
export async function GET() {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_TABLE_ID ?? "Devices";

  // 環境変数が未設定の場合はデモデータを返す
  if (!token || !baseId) {
    return NextResponse.json({ devices: getDemoDevices() });
  }

  try {
    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableId)}?filterByFormula=NOT({Sold})&sort[0][field]=Created&sort[0][direction]=desc`;

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 60 }, // 60秒キャッシュ
    });

    if (!res.ok) {
      throw new Error(`Airtable error: ${res.status}`);
    }

    const json = await res.json();

    const devices: Device[] = json.records.map((r: AirtableRecord) => {
      const f = r.fields;
      return {
        id: r.id,
        name: f.Name ?? "",
        model: f.Model ?? "",
        storage: f.Storage ?? "",
        condition: f.Condition ?? "B",
        conditionNote: f.ConditionNote ?? "",
        price: f.Price ?? 0,
        sold: f.Sold ?? false,
        imageUrl: f.Images?.[0]?.url ?? null,
      };
    });

    return NextResponse.json({ devices });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ devices: getDemoDevices() });
  }
}

type AirtableRecord = {
  id: string;
  fields: {
    Name?: string;
    Model?: string;
    Storage?: string;
    Condition?: "S" | "A" | "B" | "C";
    ConditionNote?: string;
    Price?: number;
    Sold?: boolean;
    Images?: { url: string }[];
  };
};

function getDemoDevices(): Device[] {
  return [
    {
      id: "demo1",
      name: "iPhone 14",
      model: "iPhone 14",
      storage: "128GB",
      condition: "A",
      conditionNote: "画面・背面ともにキズなし。バッテリー容量93%。",
      price: 58000,
      sold: false,
      imageUrl: null,
    },
    {
      id: "demo2",
      name: "iPhone 13",
      model: "iPhone 13",
      storage: "256GB",
      condition: "B",
      conditionNote: "背面に軽微なスレあり。動作に問題なし。",
      price: 42000,
      sold: false,
      imageUrl: null,
    },
    {
      id: "demo3",
      name: "MacBook Air M1",
      model: "MacBook Air (M1, 2020)",
      storage: "256GB SSD",
      condition: "A",
      conditionNote: "外観良好。バッテリーサイクル数38回。",
      price: 88000,
      sold: false,
      imageUrl: null,
    },
  ];
}
