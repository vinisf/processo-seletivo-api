const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getDashboardSummary(req, res) {
  try {
    const total = await prisma.application.count();

    const aprovados = await prisma.application.count({
      where: { status: "APPROVED" },
    });

    const pendentes = await prisma.application.count({
      where: { status: "PENDING" },
    });

    const reprovados = await prisma.application.count({
      where: { status: "REJECTED" },
    });

    res.json({
      total,
      aprovados,
      pendentes,
      reprovados,
    });
  } catch (error) {
    console.error("DASHBOARD ERROR:", error);
    res.status(500).json({
      message: "Erro ao carregar dados do dashboard",
      error: error.message,
    });
  }
}

module.exports = { getDashboardSummary };
