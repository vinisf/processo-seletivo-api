import { prisma } from "../lib/prisma.js";

export async function getDashboardSummary(req, res) {
  try {
    const total = await prisma.inscricao.count();

    const aprovados = await prisma.inscricao.count({
      where: { status: "APROVADO" },
    });

    const pendentes = await prisma.inscricao.count({
      where: { status: "PENDENTE" },
    });

    const reprovados = await prisma.inscricao.count({
      where: { status: "REPROVADO" },
    });

    return res.json({
      total,
      aprovados,
      pendentes,
      reprovados,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Erro ao carregar dados do dashboard",
    });
  }
}
