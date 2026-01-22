const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getDashboardSummary(req, res) {
  try {
    const total = await prisma.application.count();

    res.json({
      total,
      aprovados: 0,
      pendentes: 0,
      reprovados: 0,
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
