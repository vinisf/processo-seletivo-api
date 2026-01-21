const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getDashboardSummary(req, res) {
  try {
    const total = await prisma.application.count();

    const aprovados = await prisma.application.count({
      where: { status: "APROVADO" },
    });

    const pendentes = await prisma.application.count({
      where: { status: "PENDENTE" },
    });

    const reprovados = await prisma.application.count({
      where: { status: "REPROVADO" },
    });

    res.json({
      total,
      aprovados,
      pendentes,
      reprovados,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Erro ao carregar dados do dashboard",
    });
  }
}

module.exports = { getDashboardSummary };
